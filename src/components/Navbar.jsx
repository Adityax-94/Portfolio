export default function Navbar() {
  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm">
      <div className="container-main flex items-center justify-between h-14">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[13px] font-medium text-text hover:text-accent transition-colors"
        >
          Aditya Chavan
        </button>

        <div className="hidden sm:flex items-center gap-7">
          {['projects', 'skills', 'about', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => navigate(id)}
              className="text-[13px] text-text-muted hover:text-text transition-colors capitalize"
            >
              {id === 'projects' ? 'Work' : id}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
