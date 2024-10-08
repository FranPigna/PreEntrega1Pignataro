import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext  } from '../../context/CartContext'
import { useContext } from 'react'
import React from 'react'

const ItemDetail = ({ item }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        addItem(item, quantity)
    }
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {item.name}
                </h2>
            </header>
            <picture>
                <img src={item.img} alt={item.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {item.category}
                </p>
                <p className="Info">
                    Descripcion: {item.description}
                </p>
                <p className="Info">
                    Precio: ${item.price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail