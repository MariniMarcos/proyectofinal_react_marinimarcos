import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>         
          <Nav.Link href="#inicio"><img src="./favicon.ico" alt="Logo" />
          <Navbar.Brand href="#home">Skin-Cheap</Navbar.Brand></Nav.Link>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#skins">Comprar skins</Nav.Link>
            <Nav.Link href="#faq">Preguntas Frecuentes</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;