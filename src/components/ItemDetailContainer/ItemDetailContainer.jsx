import React, { useState, useEffect } from 'react'
import "./itemdetailcontainer.css"
import { getProducts } from '../../data/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProduct } = useParams()

    useEffect(() => {
        getProducts()
            .then((data) => {
                const findProduct = data.find((product) => product.id === idProduct)
                setProduct(findProduct)
            })
            .catch((error) => { console.log(error) })
            .finally(() => { console.log("finalizo getProducts") })
    }, [idProduct])
    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer