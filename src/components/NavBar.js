import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function ColorSchemesExample(props) {
  
  if(props.isHeader){
    return (
      <>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Container>         
            <Nav.Link href="#inicio"><img src="./logo.png" alt="Logo" />
            <Navbar.Brand id='logo' href="#home">SkinPro</Navbar.Brand></Nav.Link>
            <Nav className="me-auto">
              <Nav.Link href="#nosotros">INICIO</Nav.Link>
              <Nav.Link href="#skins">COMPRAR SKINS</Nav.Link>
              <Nav.Link href="#PreguntasFrecuentes">PREGUNTAS FRECUENTES</Nav.Link>
              <Nav.Link href="#contacto">CONTACTO</Nav.Link>
              <CartWidget/>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }else{
    return(
      <>
      <Navbar bg="dark" variant="dark">
        <Container>         
          <Nav.Link href="#inicio"><img src="./logo.png" alt="Logo" />
          <Navbar.Brand id='logo' href="#home">SkinPro</Navbar.Brand></Nav.Link>
          <Nav className="me-auto">
            <Nav.Link href={props.hrefLinkFacebook}>{props.textLinkFacebook}</Nav.Link>
            <Nav.Link href={props.hrefLinkInstagram}>{props.textLinkInstagram}</Nav.Link>
            <Nav.Link href={props.hrefLinkSteam}>{props.textLinkSteam}</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
  }


}

export default ColorSchemesExample;