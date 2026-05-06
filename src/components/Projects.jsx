import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';
import { FaGithub } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';

/* ───── Architecture node data ───── */
const architectures = {
  twominds: [
    { label: 'User Input', type: 'input', color: '#4F8CFF' },
    { label: 'LangGraph Orchestrator', type: 'engine', color: '#38BDF8' },
    { label: 'Agent Alpha / Beta', type: 'agent', color: '#A78BFA' },
    { label: 'Judge Agent', type: 'eval', color: '#FBBF24' },
    { label: 'SSE Stream → React UI', type: 'output', color: '#34D399' },
  ],
  'founder-research': [
    { label: 'Research Query', type: 'input', color: '#4F8CFF' },
    { label: 'Planning Agent', type: 'engine', color: '#38BDF8' },
    { label: 'Web Browser + Extractor', type: 'agent', color: '#A78BFA' },
    { label: 'Memory Store', type: 'state', color: '#FBBF24' },
    { label: 'Report Synthesizer', type: 'output', color: '#34D399' },
  ],
  'spotify-recommender': [
    { label: 'Spotify Dataset', type: 'input', color: '#4F8CFF' },
    { label: 'Feature Engineering', type: 'process', color: '#38BDF8' },
    { label: 'DL + ML + Rules', type: 'models', color: '#A78BFA' },
    { label: 'Ensemble Layer', type: 'merge', color: '#FBBF24' },
    { label: 'Recommendations', type: 'output', color: '#34D399' },
  ],
};

/* ───── Architecture Visual ───── */
function ArchVisual({ projectId }) {
  const nodes = architectures[projectId] || [];

  return (
    <div className="rounded-lg border border-border bg-bg-surface p-6">
      <p className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-[0.14em] mb-4">
        System Architecture
      </p>
      <div className="space-y-2">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5"
          >
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: node.color }}
            />
            <div className="flex-1 flex items-center justify-between py-2 px-3 rounded-md border border-border bg-bg-card text-xs font-mono">
              <span className="text-text-secondary">{node.label}</span>
              <span className="text-text-muted text-[10px]">{node.type}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───── Single Project ───── */
function ProjectBlock({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-14 md:py-16"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* ── Text column ── */}
        <div className={isEven ? '' : 'md:order-2'}>
          {project.flagship && (
            <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-medium text-primary bg-primary/8 border border-primary/15 rounded mb-4 uppercase tracking-[0.1em]">
              Flagship
            </span>
          )}

          <h3 className="text-[1.375rem] md:text-2xl font-semibold text-text-primary tracking-tight leading-tight">
            {project.title}
          </h3>

          <p className="mt-2.5 text-[15px] text-text-secondary leading-relaxed max-w-[52ch]">
            {project.tagline}
          </p>

          <ul className="mt-5 space-y-2.5">
            {project.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-[1.65]"
              >
                <span className="text-primary mt-[7px] flex-shrink-0">
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor">
                    <circle cx="2.5" cy="2.5" r="2.5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-[11px] font-mono text-text-muted bg-bg-surface border border-border rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="mt-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text-primary transition-colors"
            >
              <FaGithub size={14} />
              Source Code
              <HiArrowUpRight size={10} className="opacity-40" />
            </a>
          </div>
        </div>

        {/* ── Visual column ── */}
        <div className={isEven ? '' : 'md:order-1'}>
          <ArchVisual projectId={project.id} />
        </div>
      </div>
    </motion.article>
  );
}

/* ───── Projects Section ───── */
export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container-main">
        <hr className="section-divider mb-16 md:mb-20" />

        <p className="section-label">Work</p>
        <h2 className="section-heading">Selected Projects</h2>
        <p className="mt-3 text-[15px] text-text-secondary max-w-[48ch]">
          Autonomous AI systems built from research to deployment.
        </p>

        <div className="mt-10 divide-y divide-border">
          {projects.map((project, i) => (
            <ProjectBlock key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
