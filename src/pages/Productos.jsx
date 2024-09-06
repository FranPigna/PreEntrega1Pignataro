
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

function Productos(){

    return(
<main>
    <NavBar/>
    <Outlet/>
    <footer>
        <p></p>
    </footer>
</main>
    )
}

export default Productos;