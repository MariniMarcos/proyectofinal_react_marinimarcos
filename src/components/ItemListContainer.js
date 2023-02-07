import React from 'react'
import { useEffect, useState } from "react"
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { db } from '../firebase';
import { collection, getDocs, query, where } from "firebase/firestore"
import Filtro from './Filtro';
import { toast } from 'react-toastify';



const ItemListContainer = () => {
    const [productos, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const productosCollection = collection(db, "productos")
        let filtro = query(productosCollection)
        if (categoryId) {
            filtro = query(
                productosCollection,
                where("categoria", "==", categoryId)
            );
        }
        const getProducts = getDocs(filtro)
        toast.info("Cargando productos...")
        getProducts
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setProducts(productos)
                toast.dismiss()
                toast.success("Productos cargados!")
            })
            .catch((error) => {
                console.log(error)
                toast.error("Hubo un error, vuelva a intentarlo!" + error.message)
            })
    }, [categoryId])
    return (
        <>
            <section className="productos" id="skins">
                <div className="productos-header">
                    <h1 className="productos-title">Skins disponibles</h1>
                    <Filtro />
                </div>
                <div className='cards'>
                    <ItemList productos={productos} />
                </div>
            </section>
        </>
    )
}
export default ItemListContainer


