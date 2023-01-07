import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {
    
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
        <Button variant="primary">Añadir al carro</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;