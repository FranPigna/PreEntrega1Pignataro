import { Link } from "react-router-dom";


const CartItem = ({id, name, img, price, stock}) => {

    return (
        <article className="CardItem">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
        </article>
    )
}

export default CartItem