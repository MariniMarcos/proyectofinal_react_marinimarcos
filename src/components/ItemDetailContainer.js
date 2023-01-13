import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    
    //console.log(window.location.pathname)
    const params = useParams()
    console.log(params.id)
    
    return (
        <div>ItemDetailContainer</div>
    )
}

export default ItemDetailContainer