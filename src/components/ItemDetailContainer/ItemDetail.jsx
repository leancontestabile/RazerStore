import React from 'react'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ product }) => {
    const [showItemCount, setShowItemCount] = useState(true)

    const { addProductInCart } = useContext(CartContext)

    const addProduct = (contador) => {
        const productCart = { ...product, quantity: contador }
        addProductInCart(productCart)
        setShowItemCount(false)
    }

    return (
        <div className='itemDetail'>
            <img src={product.image} alt="" />
            <div className='itemSpecs'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Precio ${product.price}</p>
                <div className='itemCount'>
                    {
                        showItemCount === true ? (

                            <ItemCount stock={product.stock} addProduct={addProduct} />

                        ) : (
                            <Link to="/cart">Terminar mi compra</Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail