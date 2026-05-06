export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[12px] text-text-muted">
          Aditya Sunil Chavan
        </p>
        <p className="text-[12px] text-text-muted">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
