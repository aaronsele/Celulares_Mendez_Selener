
import {Link} from "react-router-dom";

function Navbar() {

  return (
<nav>
<Link to="/">Inicio</Link>
<Link to="/productos">Productos</Link>
<Link to="/quienes-somos">Quienes somos</Link>
<Link to="/contacto">Contacto</Link>
</nav>
)
}

export default Navbar
