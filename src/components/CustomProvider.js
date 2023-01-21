import { createContext, useContext, useState } from "react"

const contexto = createContext()
const Provider = contexto.Provider


export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)


    const agregarProducto = (producto, cantidad) => {
       
        //const copia = []
        //carrito.forEach(p=>copia.push(p))
        
       const copia = [ ...arr ]
        copia.push(producto) 
        setCarrito(copia)

    }

    const eliminarProducto = (id) => { }

        modifcarCantidad = () => {}

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        return true|false
    }


    const valorDelContexto = {
        carrito: carrito,
        totalProductos: totalProductos,
        /*  setCarrito : setCarrito , 
         setTotalProductos : setTotalProductos */
        agregarProducto: agregarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider