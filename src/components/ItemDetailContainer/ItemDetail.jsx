import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ product }) => {

    const { addProductInCart } = useContext(CartContext)

    const addProduct = (contador) => {
        const productCart = { ...product, quantity: contador }
        addProductInCart(productCart)
    }

    return (
        <div className='itemDetail'>
            <img src={product.image} alt="" />
            <div className='itemSpecs'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Precio ${product.price}</p>
                <div className='itemCount'>
                    <ItemCount stock={product.stock} addProduct={addProduct} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail