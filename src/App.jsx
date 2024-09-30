import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <CartProvider>
           <NavBar />
           <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
          <footer className='foot'>INDUSTRIA CASTOR</footer>
          </CartProvider>
          </BrowserRouter>
          </div>
  );
}

export default App;
