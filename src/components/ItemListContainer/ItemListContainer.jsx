import { useState, useEffect } from "react"
import "./itemlistcontainer.css"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ saludo }) => {

    const [products, setProducts] = useState([])
    const { idCategory } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((dataProducts) => {
                console.log(dataProducts)
                if (idCategory) {
                    const filterProducts = dataProducts.filter((product) => product.category === idCategory)
                    setProducts(filterProducts)
                    console.log(filterProducts)
                } else {
                    setProducts(dataProducts)
                }
            })
            .catch((error) => { console.log(error) })
            .finally(() => { setLoading(false) })

    }, [idCategory])

    return (
        <div className="itemlistcontainer">
            <h2>{saludo}</h2>
            {
                loading === true ? (
                    <h2>Cargando...</h2>
                ) : (
                    <ItemList products={products} />
                )
            }
        </div>
    )
}

export default ItemListContainer