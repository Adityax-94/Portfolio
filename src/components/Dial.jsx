import { useState, useEffect, useRef, useMemo } from 'react';

/*
 * Scroll-driven navigation dial — inspired by jayesh.me
 *
 * Fixed to bottom-left, only the upper-right arc is visible.
 * Rotates as the user scrolls. Section labels highlight when
 * aligned with the fixed pointer at the top of the visible arc.
 */

const SECTIONS = [
  { label: 'Home', id: 'hero', deg: 0 },
  { label: 'About', id: 'about', deg: 30 },
  { label: 'Work', id: 'projects', deg: 70 },
  { label: 'Stack', id: 'stack', deg: 120 },
  { label: 'Contact', id: 'contact', deg: 160 },
];

const DIAL_SIZE = 720;
const CENTER = DIAL_SIZE / 2;
const OUTER_R = 310;
const RING_1 = 270;
const RING_2 = 250;
const RING_3 = 230;
const INNER_R = 200;

// Convert degrees to radians
const rad = (d) => (d * Math.PI) / 180;

// Point on circle
const pt = (r, deg) => ({
  x: CENTER + r * Math.cos(rad(deg - 90)),
  y: CENTER + r * Math.sin(rad(deg - 90)),
});

export default function Dial() {
  const [rotation, setRotation] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const rafRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const pct = Math.min(scrollY / maxScroll, 1);
        // Map scroll 0–1 → rotation 0–180°
        const angle = pct * 180;
        setRotation(angle);

        // Determine active section based on which DOM element is in view
        for (let i = SECTIONS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECTIONS[i].id);
          if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleLabelClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate tick marks
  const ticks = useMemo(() => {
    const t = [];
    for (let d = 0; d < 360; d += 1) {
      const isMajor = d % 15 === 0;
      const isMid = d % 5 === 0;
      const innerR = isMajor ? OUTER_R - 14 : isMid ? OUTER_R - 9 : OUTER_R - 5;
      const p1 = pt(innerR, d);
      const p2 = pt(OUTER_R, d);
      t.push(
        <line
          key={`t${d}`}
          x1={p1.x}
          y1={p1.y}
          x2={p2.x}
          y2={p2.y}
          stroke={isMajor ? 'rgba(148,163,184,0.35)' : isMid ? 'rgba(148,163,184,0.18)' : 'rgba(148,163,184,0.08)'}
          strokeWidth={isMajor ? 1.2 : 0.5}
        />
      );
    }
    return t;
  }, []);

  // Generate degree numbers at 15° intervals
  const degreeLabels = useMemo(() => {
    const labels = [];
    for (let d = 0; d < 360; d += 15) {
      const p = pt(OUTER_R + 16, d);
      labels.push(
        <text
          key={`dl${d}`}
          x={p.x}
          y={p.y}
          textAnchor="middle"
          dominantBaseline="central"
          fill="rgba(148,163,184,0.25)"
          fontSize="9"
          fontFamily="'JetBrains Mono', monospace"
        >
          {d}
        </text>
      );
    }
    return labels;
  }, []);

  // Generate spokes from major ticks to inner ring
  const spokes = useMemo(() => {
    const s = [];
    for (let d = 0; d < 360; d += 15) {
      const p1 = pt(OUTER_R - 14, d);
      const p2 = pt(INNER_R, d);
      s.push(
        <line
          key={`s${d}`}
          x1={p1.x}
          y1={p1.y}
          x2={p2.x}
          y2={p2.y}
          stroke="rgba(148,163,184,0.06)"
          strokeWidth="0.75"
          strokeDasharray="4 4"
        />
      );
    }
    return s;
  }, []);

  // Section labels positioned outside the dial
  const sectionLabels = SECTIONS.map((sec) => {
    const p = pt(OUTER_R + 42, sec.deg);
    const isActive = activeSection === sec.id;
    return (
      <text
        key={sec.id}
        x={p.x}
        y={p.y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={isActive ? '#4F8CFF' : 'rgba(148,163,184,0.4)'}
        fontSize="12"
        fontFamily="'Inter', sans-serif"
        fontWeight={isActive ? '600' : '400'}
        style={{ cursor: 'pointer', transition: 'fill 0.3s' }}
        onClick={() => handleLabelClick(sec.id)}
        className="pointer-events-auto"
      >
        {sec.label}
      </text>
    );
  });

  return (
    <div
      className="fixed z-40 pointer-events-none"
      style={{
        width: `${DIAL_SIZE}px`,
        height: `${DIAL_SIZE}px`,
        bottom: `-${CENTER - 80}px`,
        left: `-${CENTER - 80}px`,
      }}
    >
      <svg
        width={DIAL_SIZE}
        height={DIAL_SIZE}
        viewBox={`0 0 ${DIAL_SIZE} ${DIAL_SIZE}`}
        className="w-full h-full"
        style={{
          transform: `rotate(${-rotation}deg)`,
          transformOrigin: '50% 50%',
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Concentric dashed rings */}
        <circle
          cx={CENTER} cy={CENTER} r={OUTER_R}
          stroke="rgba(148,163,184,0.15)"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx={CENTER} cy={CENTER} r={RING_1}
          stroke="rgba(148,163,184,0.1)"
          strokeWidth="0.75"
          strokeDasharray="6 4"
          fill="none"
        />
        <circle
          cx={CENTER} cy={CENTER} r={RING_2}
          stroke="rgba(148,163,184,0.08)"
          strokeWidth="0.75"
          strokeDasharray="4 3"
          fill="none"
        />
        <circle
          cx={CENTER} cy={CENTER} r={RING_3}
          stroke="rgba(148,163,184,0.06)"
          strokeWidth="0.5"
          strokeDasharray="3 5"
          fill="none"
        />
        <circle
          cx={CENTER} cy={CENTER} r={INNER_R}
          stroke="rgba(148,163,184,0.05)"
          strokeWidth="0.5"
          fill="none"
        />

        {/* Spokes */}
        {spokes}

        {/* Tick marks */}
        {ticks}

        {/* Degree labels */}
        {degreeLabels}

        {/* Section labels */}
        {sectionLabels}
      </svg>

      {/* Fixed pointer — stays at the "north" of the visible arc */}
      <div
        className="absolute"
        style={{
          top: `${CENTER - OUTER_R - 2}px`,
          left: `${CENTER - 0.5}px`,
          width: '1px',
          height: '18px',
          background: 'rgba(148,163,184,0.5)',
        }}
      />
    </div>
  );
}
