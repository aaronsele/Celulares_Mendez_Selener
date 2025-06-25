import { Link } from "react-router-dom";
import { useState } from "react";
import { marcas } from "../data/data";

function Navbar() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <nav>
    
    <img src='/src/assets/logo.png' alt="Logo de Five GigaGuys"/>


      <Link to="/">Inicio</Link>{" | "}
      <Link to="/quienes-somos">Quienes somos</Link>{" | "}
      
      <button onClick={() => setMostrarMenu(!mostrarMenu)}>
        Productos ⌄
      </button>

      {mostrarMenu && (
        <>
          <Link to="/productos">Ver todos</Link>{" | "}
          {marcas.map((marca) => (
            <Link
              key={marca.id}
              to={`/productos/${marca.id}`}
            >
              {marca.nombre}
            </Link>
          ))}
        </>
      )}
      
      {" | "}
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;
