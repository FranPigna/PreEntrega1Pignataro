import { CartWidget } from "./components/CartWidget"
import Logo from '../../img/castor-suspensoes-logo.png'
import './NavBar.css'


export const NavBar = () => {
    return <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img className="imagen-logo" src={Logo} alt="logo castor" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Productos</a>
        <a class="nav-link" href="#">Sobre Nosotros</a>
        <a class="nav-link" href="#">Contacto</a>
      </div>
    </div>
  </div>
  <CartWidget/>
</nav>
    </>
}