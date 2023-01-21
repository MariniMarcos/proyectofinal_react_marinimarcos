import { memo } from "react"
import Usuario from "./Usuario"

//memo(Componente [,diffFunction])

const UsuariosList = ({ usuarios }) => {

    console.log("Render UsuariosList")

    return (
        <div>{usuarios.map((usuario,i)=>{
            return <Usuario key={i} usuario={usuario}/>
        })}</div>
    )
}

//const UsuariosListMemorizado = memo(UsuariosList)
//export default UsuariosListMemorizado
export default memo(UsuariosList/* ,(prevProps,nexrProps)=>{
    return true | false
} */)