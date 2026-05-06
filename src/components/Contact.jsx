import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './ui/SectionHeading';
import { HiEnvelope, HiPaperAirplane } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to an API
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactLinks = [
    {
      icon: HiEnvelope,
      label: 'Email',
      value: 'adityachavan@email.com',
      href: 'mailto:adityachavan@email.com',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/adityachavan',
      href: 'https://github.com/adityachavan',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/adityachavan',
      href: 'https://linkedin.com/in/adityachavan',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="System.Connect"
          title="Get In Touch"
          subtitle="Let's build something extraordinary together"
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 neon-border">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-glow">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-text-secondary">contact.sh</span>
              </div>

              <div className="font-mono text-sm space-y-3">
                <p className="text-text-secondary">
                  <span className="text-primary">$</span> echo "Looking for an{' '}
                  <span className="text-primary">AI engineer</span> who ships production systems?"
                </p>
                <p className="text-green-400">→ Let's connect.</p>
              </div>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card neon-border hover:border-primary/30 group transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-secondary">{link.label}</p>
                    <p className="text-sm text-text-primary group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 neon-border space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-border-glow rounded-lg text-text-primary text-sm font-mono focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-text-secondary/40"
                  placeholder="your_name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-border-glow rounded-lg text-text-primary text-sm font-mono focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-text-secondary/40"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-border-glow rounded-lg text-text-primary text-sm font-mono focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none placeholder:text-text-secondary/40"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-primary to-cyan-400 text-bg-dark font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSent ? (
                  <>
                    <span className="text-green-800">✓ Message Sent!</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <HiPaperAirplane />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
