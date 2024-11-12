import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext)
    return (
        <div>
            <h2>Productos</h2>
            {
                cart.map((productCart) => (
                    <div key={productCart.id}>
                        <img src={productCart.image} alt="" />
                        <p>{productCart.name}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Precio c/u: {productCart.price}</p>
                        <p>Precio parcial: {productCart.price * productCart.quantity}</p>
                    </div>
                ))
            }
            <p>Precio total: {totalPrice()}</p>
        </div>
    )
}

export default Cart