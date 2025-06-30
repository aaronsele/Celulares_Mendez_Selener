import { Link } from "react-router-dom";
import { marcas } from "../data/data";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <img src='/src/assets/logo.png' alt="Logo de Five GigaGuys" />

      <Link to="/">Inicio</Link>
      <Link to="/quienes-somos">Quienes somos</Link>

      <div className="dropdown">
        <span className="dropdown-title">Productos</span>
        <div className="dropdown-content">
          <Link to="/productos">Ver todos</Link>
          {marcas.map((marca) => (
            <Link key={marca.id} to={`/productos/${marca.id}`}>
              {marca.nombre}
            </Link>
          ))}
        </div>
      </div>

      <Link to="/contacto">Contacto</Link>
      <Link to="/consultas">Consultas</Link>
      <Link to="/carrito" className="icono-carrito" title="Ver carrito">
        <FaShoppingCart size={20} />
      </Link>
    </nav>
  );
}

export default Navbar;
