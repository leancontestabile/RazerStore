import { useState, useEffect } from "react"
import "./itemlistcontainer.css"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"

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
        <div className="itemlistcontainer">
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer