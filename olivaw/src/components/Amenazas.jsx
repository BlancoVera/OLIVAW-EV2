const Amenazas = ({ datos, onDescartar }) => {
    return (
        <div className="row mt-4">
            {datos.map((alerta) => {
                // Evaluamos si es crítico para asignar las clases del nuevo sistema de hardware
                const esCritico = alerta.severidad === "Crítico";
                
                return (
                    <div className="col-md-4 mb-4" key={alerta.idUnico}>
                        {/* El ternario decide si usa el panel estándar o el marco de tensión crítica */}
                        <div className={`card h-100 ${esCritico ? 'card-olivaw-critico' : 'card-olivaw'}`}>
                            
                            <div className="card-header border-bottom bg-transparent d-flex justify-content-between align-items-center pb-2" style={{ borderColor: 'var(--border-dim)' }}>
                                <span className="fw-bold font-monospace text-light" style={{ fontSize: "0.85rem" }}>
                                    {alerta.idUnico}
                                </span>
                                {/* Badge de severidad técnico con los nuevos colores de terminal */}
                                <span 
                                    className="badge font-monospace" 
                                    style={{ 
                                        backgroundColor: esCritico ? "rgba(248, 81, 73, 0.1)" : "rgba(88, 166, 255, 0.1)", 
                                        color: esCritico ? "var(--alert-crit)" : "var(--alert-mod)",
                                        border: `1px solid ${esCritico ? "var(--alert-crit)" : "var(--alert-mod)"}`
                                    }}>
                                    {alerta.severidad.toUpperCase()}
                                </span>
                            </div>
                            
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="font-monospace small mb-3" style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
                                        {alerta.vectorSimulado}
                                    </h5>
                                    <h6 className="card-title fw-bold text-white mb-2" style={{ fontSize: "0.95rem" }}>
                                        {alerta.titulo}
                                    </h6>
                                    <p className="card-text small" style={{ color: "var(--text-muted)", lineHeight: "1.5" }}>
                                        {alerta.descripcion?.length > 90 
                                            ? alerta.descripcion.slice(0, 90) + "..." 
                                            : alerta.descripcion
                                        }
                                    </p>
                                </div>
                                <div className="mt-4 text-end">
                                    {/* Botón adaptado a comando CLI con la función onDescartar intacta */}
                                    <button 
                                        className="btn btn-sm font-monospace text-uppercase"
                                        style={{ 
                                            backgroundColor: "transparent",
                                            border: "1px solid var(--border-dim)", 
                                            color: "var(--text-muted)",
                                            fontSize: "0.7rem"
                                        }}
                                        onClick={() => onDescartar(alerta.idUnico)}
                                        onMouseEnter={(e) => {
                                            e.target.style.borderColor = "var(--alert-crit)";
                                            e.target.style.color = "var(--alert-crit)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderColor = "var(--border-dim)";
                                            e.target.style.color = "var(--text-muted)";
                                        }}
                                    >
                                        Drop_Event()
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Amenazas;