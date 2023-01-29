import React from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useEffect, useState} from "react"
import {setFilteredDataBase2,setFilteredDataBase,filteredDatabase,ResetFilteredDataBase} from './Functions';
import { db } from '../firebase'
import { collection } from 'firebase/firestore'


const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { id } = useParams()

    

    useEffect(() => {

        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve (setFilteredDataBase2(4))
            }, 2000)
        })
        getProducts
        .then((result) => {
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