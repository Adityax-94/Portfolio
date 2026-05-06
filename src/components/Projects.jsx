import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';
import ArchitectureDiagram from './ui/ArchitectureDiagram';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp, HiStar } from 'react-icons/hi';

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={`glass-card overflow-hidden transition-all duration-500 ${
        project.flagship ? 'neon-border ring-1 ring-primary/10' : 'neon-border'
      }`}
    >
      {/* Header */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            {project.flagship && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-3">
                <HiStar className="text-yellow-400" />
                Flagship Project
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
              {project.title}
            </h3>
            <p className="text-primary font-mono text-sm mt-1">{project.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass text-text-secondary hover:text-primary hover:border-primary/30 transition-all"
              aria-label={`${project.title} GitHub`}
            >
              <FaGithub size={18} />
            </a>
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass text-text-secondary hover:text-primary hover:border-primary/30 transition-all"
                aria-label={`${project.title} Live Demo`}
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Problem */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-secondary uppercase tracking-wider mb-2">
            // Problem
          </h4>
          <p className="text-text-secondary leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Approach */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
            // Approach
          </h4>
          <p className="text-text-secondary leading-relaxed">
            {project.approach}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-xs font-mono rounded-lg bg-primary/5 border border-primary/15 text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-mono text-primary hover:text-primary-dark transition-colors"
        >
          {isExpanded ? (
            <>
              <HiChevronUp /> Hide Details
            </>
          ) : (
            <>
              <HiChevronDown /> View Architecture & Innovations
            </>
          )}
        </button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 border-t border-border-glow pt-6">
              {/* Architecture Diagram */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
                  // System Architecture
                </h4>
                <ArchitectureDiagram architecture={project.architecture} />
              </div>

              {/* Innovations */}
              <div>
                <h4 className="text-xs font-mono text-secondary uppercase tracking-wider mb-4">
                  // Key Innovations
                </h4>
                <ul className="space-y-3">
                  {project.innovations.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="text-primary font-mono text-sm mt-0.5">▹</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="System.Projects"
          title="Featured Work"
          subtitle="Case studies of autonomous AI systems I've built"
        />
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
