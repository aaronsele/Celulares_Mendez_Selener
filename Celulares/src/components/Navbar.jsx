import { Link } from "react-router-dom";
import { useState } from "react";
import { marcas } from "../data/data";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <nav>
      <img src='/src/assets/logo.png' alt="Logo de Five GigaGuys" />

      <Link to="/">Inicio</Link>{" | "}
      <Link to="/quienes-somos">Quienes somos</Link>{" | "}
      
      <button onClick={() => setMostrarMenu(!mostrarMenu)}>
        Productos +
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
      <Link to="/contacto">Contacto</Link>{" | "}
      <Link to="/consultas">Consultas</Link>{" | "}
      
      {/* Carrito */}
      <Link to="/carrito" className="icono-carrito" title="Ver carrito">
        <FaShoppingCart size={20} />
      </Link>
    </nav>
  );
}

export default Navbar;
