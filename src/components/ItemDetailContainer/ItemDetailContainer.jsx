import React, { useState, useEffect } from 'react'
import "./itemdetailcontainer.css"
import { getProducts } from '../../data/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProducts()
            .then((data) => {
                const findProduct = data.find((product) => product.id === "rk01")
                setProduct(findProduct)
            })
            .catch((error) => { console.log(error) })
            .finally(() => { console.log("finalizo getProducts") })
    })
    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer