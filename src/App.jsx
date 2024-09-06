import './App.css'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import ItemCount from "./components/ItemCount/ItemCount"


function App() {
  return (
          <BrowserRouter>
           <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
          <Routes>
            <Route path= "/suspension" element={<Productos/>}>
              <Route path= "contacto" element={<Contacto/>}/>
              <Route path="*" element={<Error/>}/>
            </Route>
          </Routes>
          </BrowserRouter>
  )
}

export default App;
