import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import Amenazas from './components/Amenazas';
import Footer from './components/Footer';

function App() {
  const [alertas, setAlertas] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const obtenerAlertas = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();

      // Mapeo de los posts simulándolos como eventos de seguridad de OLIVAW
      const alertasFormateadas = data.slice(0, 12).map((post) => ({
        idUnico: `ALERTA-ID-${post.id}`,
        vectorSimulado: post.userId % 2 === 0 ? "CVSS:3.1/AV:N/AC:L/PR:N/UI:N" : "CVSS:3.1/AV:A/AC:H/PR:H/UI:N",
        titulo: post.title,
        descripcion: post.body,
        severidad: post.userId % 2 === 0 ? "Crítico" : "Moderado"
      }));

      setAlertas(alertasFormateadas);
    } catch (error) {
      console.error("Fallo en la red de OLIVAW:", error);
    }
  };

  useEffect(() => {
    obtenerAlertas();
  }, []);

  // Lógica de filtrado multicampo: busca si el texto coincide en el ID o en el título
  const alertasFiltradas = alertas.filter((alerta) => {
    const idSeguro = alerta.idUnico?.toLowerCase() || "";
    const tituloSeguro = alerta.titulo?.toLowerCase() || "";
    const busquedaMinuscula = terminoBusqueda.toLowerCase();
    return idSeguro.includes(busquedaMinuscula) || tituloSeguro.includes(busquedaMinuscula);
  });
const descartarAlerta = (idTarget) => {
  // Retorna todas las alertas cuyo ID sea DISTINTO al que se busca borrar
  const nuevoArreglo = alertas.filter((alerta) => alerta.idUnico !== idTarget);
  setAlertas(nuevoArreglo);
};
  return (
    <div className="container min-vh-100 p-4">
      <Header />
      <Buscador busqueda={terminoBusqueda} setBusqueda={setTerminoBusqueda} />
      <Amenazas datos={alertasFiltradas} onDescartar={descartarAlerta} />
      <Footer />
    </div>
  );
}

export default App;