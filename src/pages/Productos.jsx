
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Item from "../components/Item/Item";

function Productos(){

    return(
<main>
    <NavBar/>
    <Outlet/>
    <Item/>
    <footer>
        <p></p>
    </footer>
</main>
    )
}

export default Productos;