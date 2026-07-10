export default function Footer() {
  return (
    <footer className="py-12 border-t border-border-subtle">
      <div className="container-main flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <p className="text-[12px] text-text-muted">
            © {new Date().getFullYear()} Aditya Sunil Chavan
          </p>
          <span className="w-1 h-1 rounded-full bg-accent/40" />
          <p className="text-[12px] text-text-muted">
            Built with React & Framer Motion
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Adityax-94"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adityaschavan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:adityachavan1206@email.com"
            className="text-[12px] text-text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
