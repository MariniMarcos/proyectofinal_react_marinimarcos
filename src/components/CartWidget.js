import React from 'react'
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {
  const { totalProducto } = useCarrito();
  return (
      <a>
      <span className='numeroCarrito'> {totalProducto()} </span>
      <span className='material-icons'>shopping_cart</span>  
      </a>
  )
}

export default CartWidget