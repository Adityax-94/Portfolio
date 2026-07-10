import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

/*
 * Scroll-driven navigation dial — matching jayesh.me.
 *
 * Center pinned to viewport bottom-left corner.
 * Only upper-right arc (~120°) visible.
 * Rotation = scrollY * 0.06 (smooth lerp).
 * Tick sound plays at every major tick crossing (15°).
 */

const SECTIONS = [
  { label: 'Home', id: 'hero', deg: 45 },
  { label: 'About', id: 'about', deg: 80 },
  { label: 'Work', id: 'projects', deg: 115 },
  { label: 'Experience', id: 'experience', deg: 153 },
  { label: 'Skills', id: 'skills', deg: 190 },
  { label: 'Contact', id: 'contact', deg: 225 },
];

// Major markings at section degrees + 2 intermediate readings between each pair
const MAJOR_DEGS = new Set([
  ...SECTIONS.map(s => s.deg),
  // Between Home(45) → About(80)
  57, 69,
  // Between About(80) → Work(115)
  92, 104,
  // Between Work(115) → Experience(153)
  128, 140,
  // Between Experience(153) → Skills(190)
  165, 178,
  // Between Skills(190) → Contact(225)
  202, 214,
  // Hidden arc fill
  237, 249, 261, 273, 285, 297, 309, 321, 333, 345, 357, 9, 21, 33
]);

const SIZE = 760;
const C = SIZE / 2;
const LABEL_R = 340;
const NUM_R = 310;
const TICK_R = 295;
const RING_1 = 275;
const RING_2 = 260;
const RING_3 = 245;
const SOLID_RING = 150;

const rad = (d) => (d * Math.PI) / 180;
const ptx = (r, d) => C + r * Math.cos(rad(d - 90));
const pty = (r, d) => C + r * Math.sin(rad(d - 90));

export default function Dial() {
  const [rotation, setRotation] = useState(0);
  const [active, setActive] = useState('hero');
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('dial-muted') === 'true';
  });
  const currentRotation = useRef(0);
  const targetRotation = useRef(0);
  const animFrame = useRef(null);
  const lastTickDeg = useRef(0);
  const tickPool = useRef([]);
  const hasInteracted = useRef(false);

  // Sync volume of pre-loaded pool with mute state
  useEffect(() => {
    tickPool.current.forEach((a) => {
      a.volume = isMuted ? 0 : 0.7;
    });
    localStorage.setItem('dial-muted', isMuted);
  }, [isMuted]);

  // Pre-load a pool of Audio objects for rapid-fire playback
  useEffect(() => {
    const initialMuted = localStorage.getItem('dial-muted') === 'true';
    const pool = [];
    for (let i = 0; i < 6; i++) {
      const a = new Audio('/tick.mp3');
      a.volume = initialMuted ? 0 : 0.7;
      a.preload = 'auto';
      pool.push(a);
    }
    tickPool.current = pool;

    // Unlock audio on first user interaction (browser autoplay policy)
    const unlock = () => {
      pool.forEach((a) => {
        a.play().then(() => { a.pause(); a.currentTime = 0; }).catch(() => { });
      });
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
    };
    window.addEventListener('click', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });
    window.addEventListener('keydown', unlock, { once: true });

    return () => {
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  // Play tick from the pool (round-robin so overlapping ticks work)
  const poolIdx = useRef(0);
  const playTick = useCallback(() => {
    const pool = tickPool.current;
    if (!pool.length) return;
    const audio = pool[poolIdx.current % pool.length];
    poolIdx.current++;
    audio.currentTime = 0;
    audio.play().catch(() => { });
  }, []);

  // Smooth lerp animation loop
  const animate = useCallback(() => {
    const diff = targetRotation.current - currentRotation.current;
    if (Math.abs(diff) > 0.01) {
      currentRotation.current += diff * 0.04;
      setRotation(currentRotation.current);

      // Check if we crossed a tick boundary (every 5°)
      const currentTick = Math.floor(currentRotation.current / 5);
      if (currentTick !== lastTickDeg.current) {
        lastTickDeg.current = currentTick;
        playTick();
      }
    }
    animFrame.current = requestAnimationFrame(animate);
  }, [playTick]);

  useEffect(() => {
    animFrame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame.current);
  }, [animate]);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentY = window.scrollY;

      const points = SECTIONS.map((s, i) => {
        const el = document.getElementById(s.id);
        const topOffset = el ? el.getBoundingClientRect().top + window.scrollY : 0;
        
        let perfectScroll = topOffset;

        return { ...s, perfectScroll };
      });

      // Force first and last points
      if (points.length > 0) {
        points[0].perfectScroll = 0;
        points[points.length - 1].perfectScroll = maxScroll;
      }

      // Ensure perfectScroll values are monotonically increasing
      for (let i = 1; i < points.length; i++) {
        if (points[i].perfectScroll <= points[i - 1].perfectScroll) {
          points[i].perfectScroll = points[i - 1].perfectScroll + 1;
        }
      }

      let newTarget = 0;
      let newActive = SECTIONS[0].id;

      for (let i = 0; i < points.length; i++) {
        const curr = points[i];
        const next = points[i + 1];

        if (!next || currentY < next.perfectScroll) {
          newActive = curr.id;
          if (!next) {
            newTarget = curr.deg - 45;
          } else if (currentY <= curr.perfectScroll) {
            newTarget = curr.deg - 45; // Handle case where currentY < 0
          } else {
            const diff = next.perfectScroll - curr.perfectScroll;
            const progress = diff > 0 ? (currentY - curr.perfectScroll) / diff : 0;
            newTarget = (curr.deg - 45) + progress * (next.deg - curr.deg);
          }
          break;
        }
      }

      targetRotation.current = newTarget;
      setActive(newActive);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    
    // Re-calculate shortly after mount to ensure lazy components are loaded
    const timer = setTimeout(onScroll, 800);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(timer);
    };
  }, []);

  /* ── ticks ── */
  const ticks = useMemo(() => {
    const arr = [];
    for (let d = 0; d < 360; d++) {
      const major = MAJOR_DEGS.has(d);
      const mid = d % 5 === 0;
      const len = major ? 14 : mid ? 8 : 4;
      arr.push(
        <line key={d}
          x1={ptx(TICK_R - len, d)} y1={pty(TICK_R - len, d)}
          x2={ptx(TICK_R, d)} y2={pty(TICK_R, d)}
          stroke={major ? '#1A1A1A' : mid ? '#BFBFBF' : '#D9D9D9'}
          strokeWidth={major ? 1.2 : 0.5}
        />
      );
    }
    return arr;
  }, []);

  /* ── degree numbers ── */
  const degLabels = useMemo(() => {
    const arr = [];
    for (const d of MAJOR_DEGS) {
      const x = ptx(NUM_R, d);
      const y = pty(NUM_R, d);
      arr.push(
        <text key={d} x={x} y={y}
          transform={`rotate(${rotation}, ${x}, ${y})`}
          textAnchor="middle" dominantBaseline="central"
          fill="#A8A29E" fontSize="9" fontFamily="'JetBrains Mono', monospace"
        >{d === 9 ? 0 : d}</text>
      );
    }
    return arr;
  }, [rotation]);

  const activeSection = SECTIONS.find(s => s.id === active);
  const activeDeg = activeSection ? activeSection.deg : -1;



  return (
    <>
      <div
      className="fixed z-40 pointer-events-none hidden md:block"
      style={{ width: SIZE, height: SIZE, bottom: -C, left: -C }}
    >
      <svg
        width={SIZE} height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{
          transform: `rotate(${-rotation}deg)`,
          transformOrigin: '50% 50%',
          willChange: 'transform',
        }}
      >
        <circle cx={C} cy={C} r={TICK_R} stroke="#BFBFBF" strokeWidth="1" fill="white" />
        <circle cx={C} cy={C} r={RING_1} stroke="#BFBFBF" strokeWidth="1" strokeDasharray="6 3" fill="white" opacity="0.8" />
        <circle cx={C} cy={C} r={RING_2} stroke="#BFBFBF" strokeWidth="1" strokeDasharray="6 3" fill="white" opacity="0.9" />
        <circle cx={C} cy={C} r={RING_3} stroke="#BFBFBF" strokeWidth="1" strokeDasharray="6 3" fill="white" opacity="0.95" />
        <circle cx={C} cy={C} r={SOLID_RING} stroke="#BFBFBF99" strokeWidth="1" fill="white" />

        {(() => {
          const arr = [];
          for (const d of MAJOR_DEGS) {
            arr.push(
              <line key={d}
                x1={ptx(TICK_R - 14, d)} y1={pty(TICK_R - 14, d)}
                x2={ptx(RING_3, d)} y2={pty(RING_3, d)}
                stroke="#D6D3CE" strokeWidth="0.75" strokeDasharray="4 4"
              />
            );
          }
          return arr;
        })()}
        {ticks}
        {degLabels}

        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          const x = ptx(LABEL_R, s.deg);
          const y = pty(LABEL_R, s.deg);
          return (
            <text key={s.id}
              x={x} y={y}
              transform={`rotate(${rotation}, ${x}, ${y})`}
              textAnchor="middle" dominantBaseline="central"
              fill={isActive ? '#22c55e' : '#a8a29e'}
              fontSize="13" fontWeight={isActive ? 600 : 400}
              fontFamily="'Inter', sans-serif"
              className="pointer-events-auto cursor-pointer"
              style={{ transition: 'fill 0.3s ease' }}
              onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >{s.label}</text>
          );
        })}

      </svg>

      {/* Fixed active section indicator (Funnel) */}
      <svg
        width={SIZE} height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute top-0 left-0 pointer-events-none"
      >
        <g>
          {[-14, 0, 14].map((offset) => {
            const isCenter = offset === 0;
            const startDeg = 45 + offset;
            const endDeg = 45;
            const startR = SOLID_RING;
            const endR = TICK_R - 14;

            const startX = ptx(startR, startDeg);
            const startY = pty(startR, startDeg);
            const endX = ptx(endR, endDeg);
            const endY = pty(endR, endDeg);

            const cp1R = startR + (endR - startR) * 0.4;
            const cp1X = ptx(cp1R, startDeg);
            const cp1Y = pty(cp1R, startDeg);

            const cp2R = startR + (endR - startR) * 0.7;
            const cp2X = ptx(cp2R, endDeg);
            const cp2Y = pty(cp2R, endDeg);

            return (
              <path
                key={offset}
                d={`M ${startX} ${startY} C ${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${endX} ${endY}`}
                fill="none"
                stroke="#BFBFBF"
                strokeWidth="1"
                strokeDasharray={isCenter ? "2 5" : "4 4"}
                strokeLinecap={isCenter ? "round" : "butt"}
              />
            );
          })}

          {/* Solid active tick mark */}
          <line
            x1={ptx(TICK_R - 14, 45)} y1={pty(TICK_R - 14, 45)}
            x2={ptx(TICK_R + 6, 45)} y2={pty(TICK_R + 6, 45)}
            stroke="#404040"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>

    {/* Floating Mute Button */}
    <button
      onClick={() => setIsMuted(prev => !prev)}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 rounded-full border border-border-subtle bg-bg/85 backdrop-blur-xs shadow-xs text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-300 pointer-events-auto flex items-center justify-center cursor-pointer group"
      title={isMuted ? "Unmute sound" : "Mute sound"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-[22px] h-[22px] transition-transform duration-300 group-hover:scale-105"
      >
        {/* Speaker body outline */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5L6 9H3v6h3l5 4V5z"
        />

        {/* Inner sound wave arc */}
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.5 8.5a5 5 0 0 1 0 7"
          animate={{
            opacity: isMuted ? 0 : 1,
            x: isMuted ? -2 : 0,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Outer sound wave arc */}
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 5a9 9 0 0 1 0 14"
          animate={{
            opacity: isMuted ? 0 : 1,
            x: isMuted ? -4 : 0,
          }}
          transition={{ duration: 0.2, delay: isMuted ? 0 : 0.05 }}
        />

        {/* Mute 'X' mark on the right (drawn when muted) */}
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 9.5l5 5m0-5l-5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isMuted ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </svg>
    </button>
  </>
);
}
