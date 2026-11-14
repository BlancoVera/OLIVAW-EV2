const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center mb-5 pb-3 border-bottom" style={{ borderColor: 'var(--border-dim)' }}>
      
      {/* Zona Izquierda: Identidad de Marca y Logo */}
      <div className="d-flex align-items-center gap-3">
        
        {/* Isotipo: Hexágono Isométrico / Contenedor Wireframe (SVG Inline) */}
        <div className="d-flex align-items-center justify-content-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="38" 
            height="38" 
            fill="none" 
            stroke="var(--border-dim)" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Perímetro del hexágono (Módulo de contención) */}
            <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
            
            {/* Topología interna (Cubo isométrico) */}
            <polyline points="2 7 12 12 22 7" />
            <line x1="12" y1="22" x2="12" y2="12" />
            
            {/* Nodo central de procesamiento lógico (Brillante) */}
            <circle 
              cx="12" 
              cy="12" 
              r="2.5" 
              fill="var(--alert-mod)" 
              stroke="none" 
              style={{ filter: "drop-shadow(0px 0px 6px var(--alert-mod))" }} 
            />
          </svg>
        </div>
        
        <div>
          <h1 className="brand-title fs-4 mb-0">OLIVAW</h1>
          <p className="text-muted small mb-0 font-monospace text-uppercase" style={{ letterSpacing: "0.05em", fontSize: "0.7rem" }}>
            IDS Watchdog // v0.1
          </p>
        </div>
      </div>

      {/* Zona Derecha: Métrica de Hardware */}
      <div className="d-flex align-items-center gap-2">
        <span className="small font-monospace" style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
          SYS.LINK <span style={{ color: "var(--alert-mod)", textShadow: "0 0 5px var(--alert-mod)" }}>UP</span>
        </span>
      </div>
      
    </header>
  );
};

export default Header;