import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./cart.css"

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='emptycart'>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className='fullcart'>
            <h2>Productos</h2>
            {
                cart.map((productCart) => (
                    <div key={productCart.id} className='productcard'>
                        <img src={productCart.image} alt="" />
                        <p>{productCart.name}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Precio c/u: {productCart.price}</p>
                        <p>Precio parcial: {productCart.price * productCart.quantity}</p>
                        <button onClick={() => deleteProductById(productCart.id)}>Borrar producto</button>
                    </div>
                ))
            }
            <h2>Precio total: {totalPrice()}</h2>
            <div className='controlCart'>
                <button onClick={deleteCart}>Borrar carrito</button>
                <Link to="/checkout">Terminar compra</Link>
            </div>
        </div>
    )
}

export default Cart