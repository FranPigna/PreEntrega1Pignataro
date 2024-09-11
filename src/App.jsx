import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
          <BrowserRouter>
           
           <Routes>
            <Route path= "/suspension" element={<Productos/>}>
              <Route path= "contacto" element={<Contacto/>}/>
              <Route path="*" element={<Error/>}/>
            </Route>
          </Routes>
          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
          <ItemListContainer/>
          <ItemDetailContainer/>
          <footer className='foot'>INDUSTRIA CASTOR</footer>
          </BrowserRouter>
  );
}

export default App;
