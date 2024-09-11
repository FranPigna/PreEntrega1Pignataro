import { CartWidget } from "./components/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";



function NavBar () {
    return (
<nav>
<img src="https://i.ibb.co/YtJGcxt/castor-suspensoes-logo.png" alt="castor-suspensoes-logo" border="0" className="imglogo"/>
  <Link to="/suspension">PRODUCTOS</Link>
  <Link to="/suspension/contacto">CONTACTO</Link>
  <CartWidget/>
</nav>
);
}

export default NavBar;

