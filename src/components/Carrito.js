import { useState } from "react"
import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useCarrito } from "./CustomProvider";

const Carrito = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const { carrito } = useCarrito()
    const { totalProducto } = useCarrito();
    const handleClick = (e) => {
        const orden = {
            usuario: {
                nombre: "Marcos Marini",
                email: "marcosmarini@test.com",
                telefono: "1234-4321",
                Direccion: "Calle falsa 1234"
            },
            productos: [],
            fecha: serverTimestamp()
        }
        const ventasCollection = collection(db, "ventas")
        const pedido = addDoc(ventasCollection, orden)
        pedido
            .then((resultado) => {
                console.log(resultado.id)
            })
            .catch(error => {
                console.log(error)
            })
            toast.success(`Compraste ${totalProducto()} Skins con exito`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "colored",
            });
        }
    const handleChangeName = (e) => {
        setNombre(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    if(carrito ? carrito.length === 0 : true) 
    return (
        <div className="carrito">
            <h1>📢 No hay productos en el carrito 🛒❌</h1>
        </div>
    ) 
    return (
        <div className="carrito">
            <h1>📢 Estas a un paso de finalizar tu compra🛒💲✔</h1>
            {
                carrito.map((producto) => {
                        return (
                            <div className="producto">
                                <img src={producto.imagen} alt="" />
                                <h3>{producto.producto}</h3>
                                <p>Estado del Item: {producto.float}</p>
                                <p>Lleva stattrack: {producto.stattrack}</p>
                                <p>Precio:  ${producto.precio} Ars</p>
                                <p>Cantidad: {totalProducto()}</p>
                            </div>
    
                        )
                    }  
                )
            }
            <Form className="Payform">
            <Form.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur soluta officiis adipisci eius, doloremque ducimus atque distinctio nihil placeat, nulla voluptatibus modi error sapiente accusantium sint! Vel sit deleniti culpa.
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label onChange={handleChangeEmail} >Direccion de correo</Form.Label>
                    <Form.Control type="email" placeholder="Correo electronico" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label onChange={handleChangeName}>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Nombre completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Numero de telefono</Form.Label>
                    <Form.Control type="number" placeholder="Numero de telefono" />
                </Form.Group>
                <Button variant="primary" onClick={handleClick}>
                    Finalizar compra
                </Button>
            </Form>
        </div>
    )
}

export default Carrito