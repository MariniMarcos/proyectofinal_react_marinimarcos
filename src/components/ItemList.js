import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <section className='cards'>
            {productos.map((producto) => {
                return (
                    <div>
                        <Item producto={producto} key={producto.id} />
                    </div>
                )
            })}
        </section>
    )
}
export default ItemList