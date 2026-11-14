const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <div className="row mb-5 pb-2">
      <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <input 
          type="text" 
          className="form-control form-control-lg input-olivaw px-4" 
          placeholder="BUSCAR ID O TÍTULO DE ALERTA..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Buscador;