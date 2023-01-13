import React from 'react'
import Item from './Item'
import filteredDatabase from './Functions';
import Filtro from './Filtro';


const ItemList = () => {
  
    const ProducDiv = []
    filteredDatabase.forEach(element => {  
        const temp = (<Item imagen={element.imagen} titulo={element.producto} float={element.float} stock={element.stock} stattrack={element.stattrack} precio={element.precio}/>)
        ProducDiv.push(temp)
    });

    return (
        <section className="productos" id="skins">
            <div className="productos-header">
            <h2>SKINS DISPONIBLES</h2>
            <Filtro/>
            </div>
            <div className="cards">
            {ProducDiv}
            </div>
        </section> 
  )
}

export default ItemList