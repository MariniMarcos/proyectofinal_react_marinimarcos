import React from 'react'
import ItemCount from './ItemCount'

const Detail = (props, {stock=5}) => {
  return (
    <div className='detail'>
        <img src={props.imagen} alt="" />
        <ul>
            <li>Float: {props.float}</li>
            <li>Stock: {props.stock}</li>
            <li>StatTrack: {props.stattrack}</li>
            <li>Precio: $ {props.precio} Arg</li>
            <li>id: {props.id} </li>
        </ul>
        <ItemCount stock={stock}/>
    </div>
  )
}

export default Detail