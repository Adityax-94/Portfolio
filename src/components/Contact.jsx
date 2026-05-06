import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container-main" ref={ref}>
        <hr className="section-divider mb-16 md:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading">Let's connect</h2>
          <p className="mt-3 text-[15px] text-text-secondary leading-[1.7] max-w-[48ch]">
            Looking for an AI engineer who ships production systems?
            I'd love to hear about your project.
          </p>

          <div className="mt-10 space-y-1">
            <a
              href="mailto:adityachavan1206@email.com"
              className="flex items-center gap-4 py-4 border-b border-border group transition-colors"
            >
              <HiOutlineEnvelope
                size={16}
                className="text-text-muted group-hover:text-primary transition-colors"
              />
              <div>
                <p className="text-[11px] text-text-muted mb-0.5 font-mono uppercase tracking-wider">
                  Email
                </p>
                <p className="text-[14px] text-text-primary group-hover:text-primary transition-colors">
                  adityachavan1206@email.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Adityax-94"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-4 border-b border-border group transition-colors"
            >
              <FaGithub
                size={16}
                className="text-text-muted group-hover:text-primary transition-colors"
              />
              <div>
                <p className="text-[11px] text-text-muted mb-0.5 font-mono uppercase tracking-wider">
                  GitHub
                </p>
                <p className="text-[14px] text-text-primary group-hover:text-primary transition-colors">
                  github.com/Adityax-94
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
