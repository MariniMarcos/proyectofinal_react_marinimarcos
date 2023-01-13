import React from 'react'
import Item from './Item'
import filteredDatabase from './Functions';
import Filtro from './Filtro';
import { useEffect, useState } from "react"
import ItemList from './ItemList';


const ItemListContainer = () => {
  
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filteredDatabase)
            }, 1000)
        })
        getProducts.then((result) => {
            setProducts(result)
            setLoading(false)
        })
    }, [])

    return (
    <>
        <section className="productos" id="skins">
            <div className="productos-header">
            <h2>SKINS DISPONIBLES</h2>
            <Filtro/>
            </div>
            <div className="cards">
            {loading ? <h1>Cargando...</h1> : products.map((product) => <ItemList/>,)}
            </div>
        </section>
    </>
  )
}

export default ItemListContainer


