import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
    return (
        <div className='itemDetail'>
            <img src={product.image} alt="" />
            <div className='itemSpecs'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Precio ${product.price}</p>
                <ItemCount />
            </div>

        </div>
    )
}

export default ItemDetail