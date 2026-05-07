import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="skills" className="min-h-[80vh] flex flex-col justify-center pt-32 pb-32">
      <div className="container-main" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em] mb-12"
        >
          Stack
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {Object.entries(skills).map(([cat, items], idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + idx * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-green-500/50 rounded-full"></div>
                <h3 className="text-[13.5px] font-medium text-text">
                  {cat}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3.5 py-2 text-[12.5px] leading-none tracking-wide text-text-secondary bg-surface/30 border border-border-subtle rounded-md transition-all duration-300 hover:border-green-500/40 hover:text-green-600 hover:bg-surface hover:shadow-sm hover:-translate-y-[2px] cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
