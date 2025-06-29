import { useEffect, useState } from "react";
import './Consultas.css';

function Consultas() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem('consultas')) || [];
    setConsultas(guardadas);
  }, []);

  return (
    <div className="consultas">
      <h1>Consultas Recibidas</h1>
      {consultas.length === 0 ? (
        <p>No hay consultas por el momento.</p>
      ) : (
        <ul>
          {consultas.map((c, i) => (
            <li key={i}>
              <strong>{c.nombre} {c.apellido}</strong> - {c.email}<br />
              <em>{c.consulta}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Consultas;
