import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="contact" className="min-h-[60vh] flex flex-col justify-center pt-32 pb-32">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em] mb-12">
            Contact
          </p>
          <div className="flex items-center gap-8">
            <a
              href="mailto:adityachavan1206@email.com"
              className="text-[14px] text-[#22c55e] hover:text-[#16a34a] transition-colors underline underline-offset-4 decoration-[#22c55e]/30 hover:decoration-[#16a34a]"
            >
              Email
            </a>
            <a
              href="https://github.com/Adityax-94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#22c55e] hover:text-[#16a34a] transition-colors underline underline-offset-4 decoration-[#22c55e]/30 hover:decoration-[#16a34a]"
            >
              GitHub
            </a>
            <a
              href="https://calendly.com/adityachavan1206/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#22c55e] hover:text-[#16a34a] transition-colors underline underline-offset-4 decoration-[#22c55e]/30 hover:decoration-[#16a34a]"
            >
              Calendly
            </a>
            <a
              href="/Aditya_Chavan_AI_Engineer.pdf"
              download="Aditya_Chavan_AI_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#22c55e] hover:text-[#16a34a] transition-colors underline underline-offset-4 decoration-[#22c55e]/30 hover:decoration-[#16a34a]"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
