import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Active section detection using getBoundingClientRect
      let current = '';
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 20);
      
      if (isAtBottom) {
        current = NAV_ITEMS[NAV_ITEMS.length - 1].id;
      } else {
        for (const item of NAV_ITEMS) {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            // If the element occupies the middle-top portion of the screen (y = 120px)
            if (rect.top <= 120 && rect.bottom > 120) {
              current = item.id;
              break;
            }
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm">
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-accent origin-left"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.05, ease: 'linear' }}
      />

      <div className="container-main flex items-center justify-between h-14">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[13px] font-medium text-text hover:text-accent transition-colors"
        >
          Aditya Chavan
        </button>

        <div className="hidden sm:flex items-center gap-7">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => navigate(id)}
              className={`text-[13px] transition-colors duration-300 ${
                activeSection === id
                  ? 'text-accent'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
