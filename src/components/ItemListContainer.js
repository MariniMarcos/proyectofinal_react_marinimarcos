import React from 'react'
import filteredDatabase from './Functions';
import { useEffect, useState } from "react"
import ItemList from './ItemList';
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams()
    console.log(products)

    useEffect(() => {
        
        const URL = categoryId ? `https://api.mercadolibre.com/sites/MLA/search?q=${categoryId}` : `https://api.mercadolibre.com/sites/MLA/search?q=skins`    
        
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filteredDatabase)
            }, 1000)
        })
        getProducts.then((result) => {
            setProducts(result)
            setLoading(false)
        })
    }, [categoryId])

    return (
    <>
        <section className="productos" id="skins">
            <div className="productos-header">
            <h2>SKINS DISPONIBLES</h2>
            </div>
            <div className="cards">
            {loading ? <h1>Cargando Productos...</h1> : <ItemList products={products}/>}
            </div>
        </section>
    </>
  )
}

export default ItemListContainer


