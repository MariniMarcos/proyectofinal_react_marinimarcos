import React from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useEffect, useState} from "react"
import {setFilteredDataBase2,filteredDatabase,ResetFilteredDataBase} from './Functions';


const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { id } = useParams()

    

    useEffect(() => {

        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (1){
                    setFilteredDataBase2(1)
                }
                else{
                    ResetFilteredDataBase()
                }
                resolve(filteredDatabase)
            }, 2000)
        })
        getProducts.then((result) => {
            setProducts(result)
            setLoading(false)
        })

    }, [id])

    return (
        <div className='itemDetailContainer'>
        {loading ? <h1>Cargando Detalle ... </h1> : 
        <ItemDetail products={products} /> 
        }
        </div>
    )    

}

export default ItemDetailContainer