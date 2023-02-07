import { useState } from 'react'
import { useCarrito } from './CustomProvider'
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify'



const ItemDetail = ({ producto }) => {
  
  const [confirmado, setConfirmado] = useState(false)
  const [cantidad, setCantidad] = useState(0)
  const {agregarProducto} = useCarrito()

  const onAdd = (parametro) => {
    console.log(parametro)
    setCantidad(parametro)
    setConfirmado(true)
  }

  const handleClick = () => {
    agregarProducto(producto, cantidad)
    toast.success(`Agregaste ${cantidad} ${producto.producto} al carrito`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
  });
  }
  

 
    return (
      <div className='detail'>
      <img src={producto.imagen} alt="" />
      <ul>
          <li>Float: {producto.float}</li>
          <li>Stock: {producto.stock}</li>
          <li>StatTrack: {producto.stattrack}</li>
          <li>Precio: $ {producto.precio} Arg</li>
      </ul>
      <ItemCount stock={producto.stock} onAdd={onAdd} />
      {confirmado && <Button onClick={handleClick}>Añadir al carrito</Button>}
  </div>
  )
}

export default ItemDetail
