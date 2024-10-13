
import React, { useState } from "react"; 
import { db } from "./firebase"; 
import { doc, getDoc } from "firebase/firestore"; 

const OrderDisplay = () => { 
    const [orderId, setOrderId] = useState(null); 
    const [loading, setLoading] = useState(false); 
    
    const fetchOrderId = async () => { 
        setLoading(true); 
        try { 
         const orderRef = doc(db, "orders", "orderId"); 
         const orderSnapshot = await getDoc(orderRef); 
         
         if (orderSnapshot.exists()) { 
            setOrderId(orderSnapshot.id);
         } else { 
            console.log("No such document!"); 
        } 
    } catch (error) { 
        console.error("Error fetching order ID: ", error); 
    } finally { 
        setLoading(false); 
    } }; 
    
    return ( 
    <div> 
        <button onClick={fetchOrderId} disabled={loading}>
             {loading ? "Cargando..." : "Obtener Order ID"} 
        </button> 
        {orderId && <p>Order ID: {orderId}</p>} 
        </div> 
        ); 
    }; 
    
export default OrderDisplay;