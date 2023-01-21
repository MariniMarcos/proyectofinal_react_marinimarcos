import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Item(props) {
    
  return (
      <Card className='card'>
        <Card.Img variant="top" className='cardImage' src={props.imagen} />
        <Card.Body>
          <Card.Title className='cardTitulo'>{props.titulo}</Card.Title>
            <Card.Text>
              <ul>
                <li>Float: {props.float}</li>
                <li>Stock: {props.stock}</li>
                <li>StatTrack: {props.stattrack}</li>
                <li>Precio:  {props.precio} Arg</li>
              </ul>
            </Card.Text>
            <Button className='btn-primary'><Link to={"/item/"+props.id}>Ver mas</Link></Button>
            <Button className='btn-primary'>Añadir al carrito</Button>
        </Card.Body>
      </Card>
  );
}

export default Item;