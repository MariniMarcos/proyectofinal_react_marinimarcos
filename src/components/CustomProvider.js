import { createContext, useContext, useState } from "react"


const contexto = createContext()
const Provider = contexto.Provider

export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}
const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    
    const agregarProducto = (producto, cantidad) => {
        if(estaEnCarrito(producto.id)){
            setCarrito(
                carrito.map((el) => {
                    return el.id === producto.id ? 
                    {...el, cantidad: el.cantidad + cantidad} : el
                })
            )
        }else{
            setCarrito([...carrito, {...producto, cantidad: cantidad}])   
        }
    }
    
    const eliminarProducto = (id) => {
        setCarrito(carrito.filter((el) => el.id !== id))
    }

    
    const vaciarCarrito = () => {
        setCarrito([])
    }
    
    const estaEnCarrito = (id) => {
        carrito.find((el) => el.id === id)
    }

    const totalProducto = () => {
        let total = 0;
        carrito.forEach(ProductoEnCarrito => {
            total = total + ProductoEnCarrito.cantidad
        })
        return total;
    }


    
    const valorDelContexto = {
        carrito: carrito,
        setCarrito: setCarrito,
        totalProducto: totalProducto,
        agregarProducto: agregarProducto,
        vaciarCarrito: vaciarCarrito,
        estaEnCarrito: estaEnCarrito,
        eliminarProducto: eliminarProducto,
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}
export default CustomProvider