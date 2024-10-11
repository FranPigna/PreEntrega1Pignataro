import carrito from './assets/carrito.svg'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
    <Link to='/cart' className='CartWidget'>
        <img className='CartImg' src={carrito} alt='cart-wdiget'/>
        { totalQuantity }
    </Link>
    )
  }