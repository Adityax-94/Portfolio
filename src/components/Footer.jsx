export default function Footer() {
  return (
    <footer className="py-8 border-t border-border-glow">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-bg-dark text-sm">
              A
            </div>
            <span className="font-mono text-sm text-text-secondary">
              Aditya Sunil Chavan
            </span>
          </div>
          
          <p className="text-xs font-mono text-text-secondary/60 text-center">
            Designed & Built with{' '}
            <span className="text-primary">React</span>{' '}
            +{' '}
            <span className="text-secondary">Three.js</span>{' '}
            +{' '}
            <span className="text-accent">Framer Motion</span>
          </p>

          <p className="text-xs font-mono text-text-secondary/40">
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
