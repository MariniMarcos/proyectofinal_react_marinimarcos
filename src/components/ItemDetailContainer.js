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
        toast.info(`CARGANDO PRODUCTOS⏰😴`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
        });
        const productosCollection = collection(db, "productos")
        const referencia = doc(productosCollection, id)
        const pedido = getDoc(referencia)
        pedido
            .then((respuesta) => {
                //console.log(respuesta.id)
                const producto = respuesta.data()
                setProducto(producto)
                toast.dismiss()
                toast.success(`PRODUCTO CARGADO👇😜`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    theme: "dark",
                });
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