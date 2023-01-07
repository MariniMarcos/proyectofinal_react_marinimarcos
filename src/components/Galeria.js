import React from 'react'
import Product from './Card'
import Database from './DataBase';
import filteredDatabase from './Functions';

const Galeria = () => {
  
    const ProducDiv = []
    filteredDatabase.forEach(element => {  
        const temp = (<Product imagen={element.imagen} titulo={element.producto} float={element.float} stock={element.stock} stattrack={element.stattrack} precio={element.precio}/>)
        ProducDiv.push(temp)
    });

    return (
    <>
        {ProducDiv}
    </>
  )
}

export default Galeria


