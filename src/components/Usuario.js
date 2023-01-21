import { memo } from "react"

const Usuario = ({ usuario }) => {

    console.log("Render Usuario")
    
    return (
        <div>{usuario.nombre} - {usuario.email}</div>
    )
}
export default memo(Usuario)