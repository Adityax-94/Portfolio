import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Profile() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { value: '3+', label: 'Projects Shipped' },
    { value: 'LLMs', label: 'Core Focus' },
    { value: '2026', label: 'Graduating' },
  ];

  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container-main" ref={ref}>
        <hr className="section-divider mb-16 md:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 gap-12 md:gap-20 items-start"
        >
          {/* Left — Narrative */}
          <div className="md:col-span-3">
            <p className="section-label">Profile</p>
            <p className="text-text-secondary text-[15px] leading-[1.8] max-w-[60ch]">
              I'm{' '}
              <span className="text-text-primary font-medium">
                Aditya Sunil Chavan
              </span>
              , an AI engineer based in Pune, India. I build autonomous
              systems — multi-agent architectures that plan, reason, and act.
              My work spans LLM orchestration with LangGraph, real-time
              streaming pipelines, and production ML systems. Currently
              pursuing B.Tech in AI & ML (CGPA 7.5), but the real work
              happens in shipping deployed products.
            </p>
          </div>

          {/* Right — Stats */}
          <div className="md:col-span-2 flex flex-col">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                className="flex items-baseline justify-between py-5 border-b border-border first:border-t first:border-border"
              >
                <span className="text-xl font-semibold text-text-primary tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[13px] text-text-muted">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
