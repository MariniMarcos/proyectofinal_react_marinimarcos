import React from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { db } from '../firebase'
import { collection, getDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    useEffect(() => {
        toast.info("Cargando producto...")
        const productosCollection = collection(db, "productos")
        const referencia = doc(productosCollection, id)
        const pedido = getDoc(referencia)
        pedido
            .then((respuesta) => {
                //console.log(respuesta.id)
                const producto = respuesta.data()
                setProducto(producto)
                toast.dismiss()
                toast.success("Producto cargado!")
            })
            .catch((error) => {
                console.log(error)
                toast.dismiss()
                toast.error("Hubo un error, vuelva a intentarlo!")
            })
    }, [id])
    return (
        <div className='itemDetailContainer'>
            <ItemDetail producto={producto} />
        </div>
    )

}

export default ItemDetailContainer