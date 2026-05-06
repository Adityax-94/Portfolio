import { motion } from 'framer-motion';

const f = (d = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-32">
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
          engines. Currently pursuing B.Tech in AI & ML, shipping deployed
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
  );
}
