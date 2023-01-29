// import { useState } from "react"
// import UsuariosList from "./UsuariosList"
// import { db } from '../firebase'
//import { collection } from 'firebase/firestore'


// /* 
// useMemo (hook) : sirve para memorizar una variable (no funcion)
// useCallback (hook) : sirve para memorizar una variable que sean funciones
// memo (HoC) : 
// */

// const Carrito = () => {
    
//     const [nombre,setNombre] = useState("")
//     const [email,setEmail] = useState("")
//     const [usuarios,setUsuarios] = useState([])

//     const handleClick = (e) => {
//         let copia = [...usuarios]
//         const usuario = {
//             nombre: nombre,
//             email: email
//         }
//         copia.push(usuario)
//         setUsuarios(copia)
//     }
    
    
//     const handleChangeName = (e) => {
//         setNombre(e.target.value)
//     }
    
    
//     const handleChangeEmail = (e) => {
//         setEmail(e.target.value)
//     }
    
    
//     console.log("Render")

    
//     return (
//         <div>
//             <div>
//                 <input type="text" onChange={handleChangeName} placeholder="Nombre"/>
//             </div>
//             <div>
//                 <input type="text" onChange={handleChangeEmail} placeholder="Email"/>
//             </div>
//             <button onClick={handleClick}>terminar compra</button>
//             <UsuariosList usuarios={usuarios}/>
//         </div>
//     )
// }

// export default Carrito