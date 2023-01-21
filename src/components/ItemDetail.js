import React from 'react'
import ItemCount from './ItemCount'
import { filteredDatabase } from './Functions'
import Detail from './Detail'

const ItemDetail = () => {
  
    // const onAdd = (parametro) => {
    //     console.log(parametro)
    // }
    
    const ProducDiv = []
    filteredDatabase.forEach(element => {  
        
        const temp = (<Detail imagen={element.imagen} titulo={element.producto} float={element.float} stock={element.stock} stattrack={element.stattrack} precio={element.precio} 
        id={element.id}/>)
        
        ProducDiv.push(temp)
    });

  
    return (
    <>
            {ProducDiv}
    </>
  )
}

export default ItemDetail
