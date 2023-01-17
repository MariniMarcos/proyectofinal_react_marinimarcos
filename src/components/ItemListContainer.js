import React from 'react'
import { useEffect, useState } from "react"
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import filteredDatabase from './Functions';
import Item from './Item';



const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoria } = useParams()




    useEffect(() => {

        

        const prods = fetch('../public/productos.json')
        
        prods 
        .then((res) => res.json())

        .then((data) => setProducts(data),

        setLoading(false))  

        .catch((err) => console.log(err))
        
        .finally(() => {
            console.log("Promise completed");
        });
    }, [categoria])
            
        // const getProducts = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(filteredDatabase)
        //     }, 1000)
        // })
        // getProducts.then((result) => {

        //     if (categoria) {
        //         setProducts(result.filter(item => item.categoria === categoria))
        //     }
        //     setLoading(false)
        // })
    

    return (
        <>
            <section className="productos" id="skins">
                <div className="productos-header">
                    <h2>SKINS DISPONIBLES</h2>
                </div>
                <div className="cards">
                    {loading ? <h1>Cargando Productos...</h1> : <ItemList products={products} />}
                </div>
            </section>
        </>
    )
}

export default ItemListContainer


