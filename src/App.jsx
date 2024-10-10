import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Productos from './pages/Productos'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <CartProvider>
           <NavBar />
           <Routes>
            <Route path='/' element={<Productos/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
          <footer className='foot'>INDUSTRIA CASTOR</footer>
          </CartProvider>
          </BrowserRouter>
          </div>
  );
}

export default App;
