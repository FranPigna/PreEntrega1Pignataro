import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Form  from './CheckoutForm/CheckoutForm'
import { collection, getFirestore, addDoc} from 'firebase/firestore'


const Checkout = () => {

    const[buyer, setBuyer ] = useState({
        name:"",
        email: "",
    })
 
    const[error, setError ] = useState({
        name:"",
        email: "",
    })
 
    const { cart } = useContext(CartContext)

    const { total } = useContext(CartContext)

    const handleChage = (e) => {
       setBuyer({
        ...buyer,
        [e.target.name] : e.target.value
       })
    }
  
    const submit = (e) => {
        e.preventDefault()
        const localError = {}
        if(!buyer.name){
            localError.name = "El nombre es obligatorio"
        }
        if(!buyer.email){
            localError.email = "El email es obligatorio"
        }

        if(Object.keys(localError).length ===0){
            addToCart()
        } else {
            setError(localError)
        }
    }
    console.log(error)

    const addToCart = () => {
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        const purchase ={
            buyer,
            items: cart,
            total: total,
            date: new Date()
        }
        addDoc(orderCollection, purchase)
        .then(res => console.log(res.id))
        .catch(err => console.log(err))
    }

    return(
        <div>
            <Form handleChage={handleChage} submit={submit} formData={buyer} error={error}/>
        </div>
    )
}

export default Checkout