import { useState, useEffect } from "react"
import "./itemlistcontainer.css"
import { getProducts } from "../../data/data.js"

const ItemListContainer = ({ saludo }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => { console.log(error) })
            .finally(() => { console.log("finalizo getProducts") })

    }, [])

    console.log(products)

    return (
        <div className="greeting">
            <h2>{saludo}</h2>
            {
                products.map( (product) => (
                    <div key={product.id}>
                        <img src={product.image} alt="" />
                        <h2>{product.name}</h2>
                        <p>Precio: ${product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemListContainer