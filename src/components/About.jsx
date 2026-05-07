import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center pt-32 pb-32">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em] mb-12">
            About
          </p>
          <p className="text-[15px] text-text-secondary leading-[1.85] max-w-[56ch]">
            I'm Aditya Sunil Chavan, based in Pune, India. I build autonomous
            AI systems - multi-agent architectures that plan, reason, and act.
            My work spans LLM orchestration with LangGraph, real-time streaming
            pipelines, and production ML systems. I don't just prototype ,
            every project in my portfolio is deployed and functional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
