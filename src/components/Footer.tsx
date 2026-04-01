const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* Giant watermark name */}
      <div className="overflow-hidden py-8">
        <p className="font-display text-[10vw] md:text-[8vw] font-extrabold uppercase text-foreground/[0.03] leading-none text-center whitespace-nowrap select-none">
          SHIVA SANTHOSH REDDY
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 pb-8 text-center md:text-left">
        <p className="font-mono text-xs text-muted-foreground">
          SHIVA SANTHOSH REDDY — Full Stack Developer
        </p>
        <div className="flex gap-6">
          {["Home", "About", "Work", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase() === "home" ? "hero" : link.toLowerCase()}`}
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} · shivasanthoshqt@gmail.com · Built with
          React + Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;
