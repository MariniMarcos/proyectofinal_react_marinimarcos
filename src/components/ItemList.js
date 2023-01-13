import React from 'react'
import Item from './Item'
import filteredDatabase from './Functions';


const ItemList = () => {
  
    const ProducDiv = []
    filteredDatabase.forEach(element => {  
        const temp = (<Item imagen={element.imagen} titulo={element.producto} float={element.float} stock={element.stock} stattrack={element.stattrack} precio={element.precio}/>)
        ProducDiv.push(temp)
    });

    return (
            <div className="cards">
            {ProducDiv}
            </div>
  )
}

export default ItemList