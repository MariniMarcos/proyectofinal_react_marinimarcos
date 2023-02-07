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
        setCarrito([...carrito, producto])
    }
    const eliminarProducto = (id) => { }
    const   modifcarCantidad = () => {}
    const vaciarCarrito = () => {
        setCarrito([])
    }
    const estaEnCarrito = (id) => {
        return true|false
    }
    const valorDelContexto = {
        carrito: carrito,
        totalProductos: totalProductos,
        agregarProducto: agregarProducto
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}
export default CustomProvider