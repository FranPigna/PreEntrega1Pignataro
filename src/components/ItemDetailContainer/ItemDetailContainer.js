import './ItemDetailContainer.css'
import { useState, useEffect, useContext } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams()
    const { addItem } = useContext(CartContext)

    const onAdd = (q) => {
        addItem(item, q)
    }
    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, "items", id)
        getDoc(docRef)
        .then((snapshot) => {
            setItem({
                id: snapshot.id,
                ...snapshot.data()
            })
        })
    }, [id])
    return(
       <ItemDetail item={item} onAdd={onAdd}/>

    )
}

export default ItemDetailContainer