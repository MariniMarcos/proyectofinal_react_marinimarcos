import { useState } from "react"
import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useCarrito } from "./CustomProvider";

const Carrito = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const { carrito, totalProducto, vaciarCarrito, eliminarProducto } = useCarrito()

    const handleClick = (e) => {
        const orden = {
            usuario: {
                nombre: nombre,
                email: email,
                telefono: telefono,
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
    function handleNombreChange(event) {
        setNombre(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleTelefonoChange(event) {
        setTelefono(event.target.value);
    }

    function PrecioTotalProducto (producto){
        let total = 0;
        total += producto.precio * producto.cantidad

        return total
    }

    const deleteItem = (producto) => {
        eliminarProducto(producto);
        toast.dismiss();
        toast.error(`Borraste ${producto.cantidad} ${producto.producto} con exito `, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "colored",
        });
    };

    if (carrito ? carrito.length === 0 : true)
        return (
            <div className="carrito">
                <h1>📢 No hay productos en el carrito 🛒❌</h1>
            </div>
        )
    return (
        <div className="carrito">
            <h1>📢 Estas a un paso de finalizar tu compra🛒💲✔</h1>
            <Button variant="danger" onClick={vaciarCarrito} > VACIAR EL CARRITO 🛒</Button>
            {
                carrito.map((producto) => {
                    return (
                        <div className="producto">
                            <img src={producto.imagen} alt="" />
                            <h3>{producto.producto}</h3>
                            <p>Estado del Item: {producto.float}</p>
                            <p>Lleva stattrack: {producto.stattrack}</p>
                            <p>Precio:  ${producto.precio} Ars</p>
                            <p>Cantidad: {producto.cantidad}</p>
                            <p>Importe Total Producto: ${PrecioTotalProducto(producto)} </p>
                            <Button id="EliminarProducto" variant="danger" onClick={() => deleteItem(producto)}> Eliminar Item </Button>
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
                    <Form.Label>Direccion de correo</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleEmailChange} placeholder="Correo electronico" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" value={nombre} onChange={handleNombreChange} placeholder="Nombre completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Numero de telefono</Form.Label>
                    <Form.Control type="tel" value={telefono} onChange={handleTelefonoChange} placeholder="Numero de telefono" />
                </Form.Group>
                <Button disabled={!nombre || !email || !telefono} onClick={handleClick} >Finalizar Compra</Button>
            </Form>
        </div>
    )
}

export default Carrito