import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { value: '3+', label: 'AI Projects Deployed' },
    { value: '7.5', label: 'CGPA' },
    { value: '5+', label: 'AI/ML Technologies' },
    { value: '2026', label: 'Expected Graduation' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="System.Identity"
          title="About Me"
          subtitle="Who I am and what drives me"
        />

        <div ref={ref} className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left — Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >
            <div className="glass-card p-6 md:p-8 neon-border">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border-glow">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-text-secondary">about_aditya.md</span>
              </div>

              <div className="space-y-4 font-mono text-sm md:text-base leading-relaxed">
                <p className="text-text-secondary">
                  <span className="text-primary">{'>'}</span>{' '}
                  <span className="text-text-primary">
                    I'm <span className="text-primary font-semibold">Aditya Sunil Chavan</span>, an AI engineer
                    based in Pune, India. Currently pursuing B.Tech in AI & ML, but my real education
                    happens in the trenches — building systems that think.
                  </span>
                </p>

                <p className="text-text-secondary">
                  <span className="text-secondary">{'>'}</span>{' '}
                  <span className="text-text-primary">
                    I'm fascinated by the idea of <span className="text-secondary">autonomous reasoning</span> — 
                    machines that don't just respond, but plan, debate, and evolve their thinking. This drove me to 
                    build multi-agent systems where AI agents collaborate and challenge each other.
                  </span>
                </p>

                <p className="text-text-secondary">
                  <span className="text-accent">{'>'}</span>{' '}
                  <span className="text-text-primary">
                    My work sits at the intersection of <span className="text-accent">LLM orchestration</span>,{' '}
                    <span className="text-accent">state machine design</span>, and{' '}
                    <span className="text-accent">production ML systems</span>. I don't just experiment — I ship.
                    Every project in my portfolio is deployed and functional.
                  </span>
                </p>

                <p className="text-text-secondary">
                  <span className="text-green-400">{'>'}</span>{' '}
                  <span className="text-text-primary">
                    When I'm not building, I'm leading — as a member of the Training & Placement Committee 
                    and the AI Association, I help bridge the gap between academic knowledge and 
                    real-world engineering.
                  </span>
                </p>

                <div className="pt-2 flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-text-primary">status:</span>
                  <span className="text-green-400 animate-pulse">seeking opportunities_</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="glass-card p-5 text-center neon-border group hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-secondary font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="col-span-2 glass-card p-5 neon-border-purple"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎓</div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">B.Tech — AI & Machine Learning</h4>
                  <p className="text-xs text-text-secondary mt-1">2022 – 2026 • Pune, India</p>
                  <p className="text-xs text-secondary mt-1 font-mono">CGPA: 7.5</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
