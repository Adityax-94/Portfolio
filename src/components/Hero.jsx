import { motion } from 'framer-motion';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="container-main">
        {/* Label */}
        <motion.p {...fade(0.05)} className="section-label mb-4">
          Agentic AI Engineer
        </motion.p>

        {/* Heading */}
        <motion.h1
          {...fade(0.15)}
          className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold text-text-primary leading-[1.15] tracking-tight max-w-[18ch]"
        >
          Building Autonomous{' '}
          <span className="gradient-text">AI Systems</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fade(0.25)}
          className="mt-5 text-base md:text-[17px] text-text-secondary max-w-[52ch] leading-[1.7]"
        >
          I design multi-agent reasoning systems, LLM orchestration pipelines,
          and production ML infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fade(0.35)} className="mt-8 flex items-center gap-3">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-hover transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2 text-sm font-medium text-text-muted border border-border rounded-md hover:text-text-primary hover:border-text-muted/50 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
