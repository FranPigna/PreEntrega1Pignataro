import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({id, name, img, price, quantity }) => {

    const { cart, removeItem, clear } = useContext(CartContext)

    return (
     <article className="CardItem">
        <h2 className="ItemHeader">
            {name}
        </h2>
        <picture>
                <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className="Info">
                Cantidad: {quantity}
            </p>
        </section>
        <footer className='ItemFooter'>
        <button onClick={() => removeItem(id)} className='Belim'>Eliminar</button>
        </footer>
     </article>
    )
}

export default CartItem