import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';
import SectionHeading from './ui/SectionHeading';

const categoryIcons = {
  'Languages': '⟨/⟩',
  'AI / ML': '🧠',
  'Tools & Frameworks': '⚙️',
  'Systems & Infrastructure': '🏗️',
};

const categoryColors = {
  'Languages': 'from-blue-500 to-cyan-400',
  'AI / ML': 'from-purple-500 to-pink-500',
  'Tools & Frameworks': 'from-cyan-400 to-teal-400',
  'Systems & Infrastructure': 'from-amber-400 to-orange-500',
};

const categoryBarColors = {
  'Languages': 'bg-gradient-to-r from-blue-500 to-cyan-400',
  'AI / ML': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'Tools & Frameworks': 'bg-gradient-to-r from-cyan-400 to-teal-400',
  'Systems & Infrastructure': 'bg-gradient-to-r from-amber-400 to-orange-500',
};

function SkillBar({ skill, delay, barColor }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text-primary font-medium group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-text-secondary">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className={`h-full rounded-full ${barColor}`}
          style={{
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="System.Capabilities"
          title="Tech Stack"
          subtitle="Technologies and tools I work with"
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIndex * 0.15 }}
              className="glass-card p-6 neon-border hover:border-primary/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-glow">
                <span className="text-xl">{categoryIcons[category]}</span>
                <h3 className="text-lg font-semibold text-text-primary">{category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {items.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={0.2 + i * 0.08}
                    barColor={categoryBarColors[category]}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
