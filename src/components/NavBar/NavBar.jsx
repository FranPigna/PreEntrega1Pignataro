import { CartWidget } from "./components/CartWidget";
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar" >
      <Link to='/'>
      <img src="https://i.ibb.co/YtJGcxt/castor-suspensoes-logo.png" alt="castor-suspensoes-logo" border="0" className="imglogo"/>
      </Link>
      <div className='Categories'>
        <NavLink to={`/category/suspension`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>SUSPENSIONES</NavLink>
        <NavLink to={`/category/accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>ACCESORIOS</NavLink>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar;

