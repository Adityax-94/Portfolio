import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="experience" className="min-h-[80vh] pt-32 pb-48">
      <div className="container-main" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em] mb-16"
        >
          Experience
        </motion.p>

        <div className="flex flex-col gap-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              className="pb-10 border-b border-border-subtle flex flex-col gap-4"
            >
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-[14px] text-text">{e.role}</span>
                  <span className="text-[12px] text-text-muted">· {e.org}</span>
                </div>
                {e.period && (
                  <span className="text-[12px] text-text-muted whitespace-nowrap ml-6">
                    {e.period}
                  </span>
                )}
              </div>
              {e.description && (
                <ul className="list-disc flex flex-col gap-2 mt-2 ml-4">
                  {e.description.map((desc, idx) => (
                    <li key={idx} className="text-[13px] text-text-muted pl-1 leading-relaxed text-left">
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
