import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Item({ producto }) {
  const notify = () => toast.info("Cargando Detalle de producto...");
  return (
    <Card className='card'>
      <Card.Img variant="top" className='cardImage' src={producto.imagen} />
      <Card.Body>
        <Card.Title className='cardTitulo'>{producto.titulo}</Card.Title>
        <Card.Text>
          <ul className='' >
            <li>Nombre: {producto.producto}</li>
            <li>Float: {producto.float}</li>
            <li>Stock: {producto.stock}</li>
            <li>StatTrack: {producto.stattrack}</li>
            <li>Precio: $ {producto.precio} Arg</li>
          </ul>
        </Card.Text>
        <Button onClick={notify} className='btn-primary'><Link to={"/item/" + producto.id}>Ver mas</Link></Button>
      </Card.Body>
    </Card>
  );
}
export default Item;