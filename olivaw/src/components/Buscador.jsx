const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-6 offset-md-3">
        <input 
          type="text" 
          className="form-control bg-dark text-white border-secondary" 
          placeholder="Filtrar por ID o por título de la alerta..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Buscador;