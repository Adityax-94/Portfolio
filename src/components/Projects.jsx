import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';
import { FaGithub } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';

function ProjectItem({ project }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="pb-12 md:pb-16 pt-4 border-b border-border last:border-0"
    >
      {/* Title row */}
      <div className="flex items-center justify-between gap-6">
        <h3 className="text-[1.1rem] font-medium text-text tracking-tight">
          {project.title}
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text transition-colors"
          aria-label={`${project.title} on GitHub`}
        >
          <FaGithub size={18} />
          <HiArrowUpRight size={11} className="opacity-40" />
        </a>
      </div>

      {/* Summary */}
      <p className="mt-5 text-[14px] text-text-secondary leading-[1.7] max-w-[52ch]">
        {project.summary}
      </p>

      {/* Highlights */}
      <ul className="mt-8 space-y-3">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-3 text-[13px] text-text-muted leading-[1.7]">
            <span className="mt-[9px] w-[4px] h-[4px] rounded-full bg-border flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech tags & Links */}
      <div className="mt-10 flex items-start justify-between gap-6 w-full">
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span key={t} className="inline-flex items-center px-3 py-1.5 text-[11px] leading-none font-mono text-text-muted bg-surface border border-border-subtle rounded">
              {t}
            </span>
          ))}
        </div>
        
        <a 
          href={project.demo || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center text-[12px] leading-none font-mono text-green-500 transition-all duration-300 -translate-y-[2px] hover:-translate-y-[4px] hover:text-green-400 hover:shadow-sm cursor-pointer"
        >
          live_demo ↗
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="min-h-screen pt-32 pb-32">
      <div className="container-main" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em] mb-12"
        >
          Work
        </motion.p>

        <div className="flex flex-col gap-10 md:gap-14">
          {projects.map((p) => (
            <ProjectItem key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
