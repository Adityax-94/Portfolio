import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="System.Experience"
          title="Activities & Leadership"
          subtitle="Where I lead, contribute, and grow"
        />

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full bg-bg-dark border-2 border-primary shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
                
                {/* Icon */}
                <div className="absolute left-2.5 md:left-4.5 top-8 text-lg">
                  {exp.icon}
                </div>

                <div className="glass-card p-6 neon-border hover:border-primary/25 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-primary mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-secondary font-mono mb-3">{exp.organization}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
