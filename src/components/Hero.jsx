import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const f = (d = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  const [systemActive, setSystemActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!systemActive) {
      document.body.style.overflow = 'hidden';

      // Listen for "any key"
      const handleKeyDown = () => setSystemActive(true);
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [systemActive]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!systemActive && (
          <motion.div
            key="entrance"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg group cursor-pointer"
            onClick={() => setSystemActive(true)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-8"
            >
              <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-border-subtle group-hover:border-accent transition-colors duration-500">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2.5 h-2.5 bg-accent rounded-full mb-[1px]"
                />
              </div>
              <div className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#444444] group-hover:text-[#888888] transition-colors duration-500">
                Click Here to Enter
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-32 relative">
        <motion.div
          {...f(0)}
          className="fixed top-6 left-6 md:top-8 md:left-8 z-[60] flex gap-6 font-mono"
        >
          <span className="text-text-muted text-[13px] mt-[1px]">00</span>
          <div className="flex flex-col gap-1">
            <a href="mailto:adityachavan1206@email.com" className="text-[14.5px] text-text-secondary hover:text-text transition-colors">Email</a>
            <a href="https://github.com/Adityax-94" target="_blank" rel="noopener noreferrer" className="text-[14.5px] text-text-secondary hover:text-text transition-colors">GitHub</a>
            <a href="https://t.me/Adityax_94" target="_blank" rel="noopener noreferrer" className="text-[14.5px] text-text-secondary hover:text-text transition-colors">Telegram</a>
          </div>
        </motion.div>

        <motion.div
          {...f(0)}
          className="fixed top-6 right-6 md:top-8 md:right-8 z-[60] flex flex-col font-mono text-[11px] text-[#777777] pointer-events-none tracking-widest gap-0.5"
        >
          <span>X, {String(mousePos.x).padStart(5, '0')}°</span>
          <span>Y, {String(mousePos.y).padStart(5, '0')}°</span>
        </motion.div>

        <div className="container-main">
          <motion.h1
            {...f(0.1)}
            className="text-[1.5rem] sm:text-[1.85rem] md:text-[2.15rem] font-medium text-text leading-[1.4] tracking-tight max-w-[32ch]"
          >
            I'm <span className="text-accent">Aditya</span>, an agentic AI
            engineer building autonomous reasoning systems. Turning complex AI
            research into production-ready multi-agent products.
          </motion.h1>

          <motion.p
            {...f(0.25)}
            className="mt-12 text-[15px] text-text-secondary leading-[1.8] max-w-[52ch]"
          >
            Previously built debate arenas, research agents, and recommendation
            engines. Currently pursuing B.Tech in <span className="text-accent">AI & ML</span>, shipping deployed
            systems.
          </motion.p>

          <motion.div {...f(0.35)} className="mt-16 flex items-center gap-6">
            <a
              href="mailto:adityachavan1206@email.com"
              className="text-[14px] text-text-muted hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
            >
              Email
            </a>
            <a
              href="https://drive.google.com/file/d/1_c3OOSk8eNCfjrL5rxbrtbB38PT3K_9s/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#22c55e] hover:text-[#16a34a] transition-colors underline underline-offset-4 decoration-[#22c55e]/30 hover:decoration-[#16a34a]"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
