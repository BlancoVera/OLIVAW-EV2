const Amenazas = ({ datos, onDescartar }) => {
    return (
        <div className="row mt-4">
            {datos.map((alerta) => (
                <div className="col-md-4 mb-4" key={alerta.idUnico}>
                    <div className="card h-100 border-danger">
                        <div className="card-header bg-danger text-white fw-bold d-flex justify-content-between align-items-center">
                            <span>{alerta.idUnico}</span>
                            <span className="badge bg-dark">{alerta.severidad}</span>
                        </div>
                        <div className="card-body bg-dark text-light d-flex flex-column justify-content-between">
                            <div>
                                <h5 className="text-warning mb-2 text-uppercase font-monospace small">
                                    {alerta.vectorSimulado}
                                </h5>
                                <h6 className="card-title fs-6 fw-bold text-white mb-2">
                                    {alerta.titulo}
                                </h6>
                                <p className="card-text text-secondary small">
                                    {alerta.descripcion?.length > 90
                                        ? alerta.descripcion.slice(0, 90) + "..."
                                        : alerta.descripcion
                                    }
                                </p>
                            </div>
                            <div className="mt-3 text-end">
                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => onDescartar(alerta.idUnico)}
                                >
                                    Descartar Alerta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Amenazas;