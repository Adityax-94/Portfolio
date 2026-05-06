import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { techStack } from '../data/portfolioData';

export default function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="stack" className="py-20 md:py-24">
      <div className="container-main" ref={ref}>
        <hr className="section-divider mb-16 md:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Stack</p>
          <h2 className="section-heading">Technologies</h2>
          <p className="mt-3 text-[15px] text-text-secondary max-w-[48ch]">
            Tools and frameworks I build with.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {Object.entries(techStack).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + idx * 0.06 }}
            >
              <h3 className="text-[13px] font-medium text-text-muted mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-[13px] text-text-secondary bg-bg-surface border border-border rounded-md hover:text-text-primary hover:border-text-muted/30 transition-colors cursor-default"
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
