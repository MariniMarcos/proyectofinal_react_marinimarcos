import React from 'react'
import { useEffect, useState } from "react"
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import {setFilteredDataBase,filteredDatabase,ResetFilteredDataBase} from './Functions';
import { db } from '../firebase';
import {collection} from "firebase/firestore"



const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoria } = useParams()




    useEffect(() => {

        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (categoria){
                    setFilteredDataBase(categoria)
                } 
                else{
                    ResetFilteredDataBase()
                }
                resolve(filteredDatabase)
            }, 1000)
        })
        getProducts.then((result) => {
            setProducts(result)
            setLoading(false)
        })
    
    }, [categoria])

    return (
        <>
            <section className="productos" id="skins">
                <div className="productos-header">
                    <h2>SKINS DISPONIBLES</h2>
                </div>
                <div className="cards">
                    {loading ? <h1>Cargando Productos...</h1> : <ItemList/>}
                </div>
            </section>
        </>
    )
}

export default ItemListContainer


