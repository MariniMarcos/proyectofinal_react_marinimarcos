import React from 'react'
import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
  
    const [contador, setContador] = useState(1)

    const handleSumar = () => {
        if (contador < stock ){
            setContador(contador + 1)
        }
    }

    const handleRestar = () =>{
        setContador(contador - 1)
    }

    const handleConfirmar =() =>{
        onAdd(contador)
    }

    const handleResetear = () =>{
        setContador(1)
    }

 


    return (
        <div className='itemCount'>
            <button onClick={handleResetear}>Reset</button>
            <br />
            <button onClick={handleSumar}>+</button>
            <p>{contador}</p>
            <button onClick={handleRestar }>-</button>
            <br />
            <button onClick={handleConfirmar}>Confirmar</button>
        </div>
    )
}

export default ItemCount