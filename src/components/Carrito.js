//import { handleClick } from "./utils"

const Carrito = () => {

    //const btn = document.querySelector('button')
    //btn.addEventListener('click',?)
    //e.target = es el elemento original que dispara el evento 

    const handleClick = (e) => {
        //const btn = document.querySelector('button')
        console.log(e.target)
    }

    const handleChange = (e) => {
        //const input = document.querySelector('input')
        console.log(e.target)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>terminar compra</button>
            {/* <button onClick={(e)=>{}}>terminar compra</button> */}
        </div>
    )
}

export default Carrito