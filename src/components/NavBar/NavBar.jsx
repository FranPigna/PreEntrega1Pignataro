import { CartWidget } from "./components/CartWidget";
import Logo from '../../img/castor-suspensoes-logo.png';
import './NavBar.css';
import { Link } from "react-router-dom";



function NavBar () {
    return (
<nav>
  <Link to="/suspension">Productos</Link>
  <Link to="/suspension/contacto">Contacto</Link>
  <CartWidget/>
</nav>
);
}

export default NavBar;

