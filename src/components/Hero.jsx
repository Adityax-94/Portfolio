import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowDown, HiCode } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="section-container relative z-10 text-center py-20">
        {/* Terminal-style tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-8"
        >
          <HiCode className="text-primary" />
          <span className="text-xs font-mono text-primary tracking-wider uppercase">
            Agentic AI Engineer
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-text-primary">Building</span>
            <span className="block gradient-text py-1">Autonomous AI Systems</span>
            <span className="block text-text-primary">That{' '}
              <TypeAnimation
                sequence={[
                  'Think.',
                  2000,
                  'Reason.',
                  2000,
                  'Evolve.',
                  2000,
                  'Decide.',
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-primary glow-text"
              />
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I architect multi-agent reasoning systems, LLM orchestration pipelines, and
          intelligent automation — turning complex AI research into production-ready products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-cyan-400 text-bg-dark font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3.5 border border-primary/30 text-primary font-semibold rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/adityachavan', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/adityachavan', label: 'LinkedIn' },
            { icon: HiEnvelope, href: 'mailto:adityachavan@email.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl glass neon-border text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-text-secondary/50"
          >
            <span className="text-xs font-mono">scroll</span>
            <div className="w-5 h-8 rounded-full border border-text-secondary/30 flex justify-center pt-1">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
