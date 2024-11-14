import { useState, useEffect } from "react"
import "./itemlistcontainer.css"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"

const ItemListContainer = ({ saludo }) => {

    const [products, setProducts] = useState([])
    const { idCategory } = useParams()

    const getProducts = () => {
        const productsRef = collection( db, "products" )
        getDocs(productsRef)
            .then((dataDb)=> {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }
                })
                
                setProducts(productsDb)
            })
    }

    const getProductsByCategory = () => {
        const productsRef = collection(db, "products")
        const queryCategories = query(productsRef, where("category", "==", idCategory))
        getDocs(queryCategories)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id , ...productDb.data() }
                })
                setProducts(productsDb)
            })
    }

    useEffect(() => {
        if (idCategory) {
            getProductsByCategory()
        } else {
            getProducts()
        }
    }, [idCategory])
    
    return (
        <div className="itemlistcontainer">
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer