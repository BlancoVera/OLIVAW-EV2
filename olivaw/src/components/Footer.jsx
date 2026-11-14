const Footer = () => {
  return (
    <footer className="text-center mt-5 pb-4 pt-5 border-top border-secondary border-opacity-10">
      <small className="text-muted d-block" style={{ opacity: 0.4, fontSize: "0.7rem", letterSpacing: "0.05em" }}>
        <span className="font-monospace fw-bold" style={{ color: "var(--olivaw-text-dim)" }}>OLIVAW v0.1</span> 
        <span className="mx-2">&mdash;</span> 
        Orchestrated Learning Intelligence for Vulnerability Analysis and Watchdog &copy; 2026
      </small>
    </footer>
  );
};

export default Footer;