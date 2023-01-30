import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar(props) {

  if (props.isHeader) {
    return (
      <>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
            <Nav.Link href="#inicio"><img src="./logo.png" alt="Logo" />
              <Navbar.Brand id='logo' href="#home">SkinPro</Navbar.Brand></Nav.Link>
            <Nav className="me-auto">
              <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
              <Nav.Link href="#skins">SKINS</Nav.Link>
              {/* <NavDropdown id="nav-dropdown-dark-example" title="FILTRAR" menuVariant="dark">
                <NavDropdown.Item href='#skins'><Link to="/" className='nav-link'>TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item> <Link to="/productos/guantes" className='nav-link'>GUANTES</Link> </NavDropdown.Item>
                <NavDropdown.Item> <Link to="/productos/cuchillo" className='nav-link'>CUCHILLOS</Link> </NavDropdown.Item>
                <NavDropdown.Item> <Link to="/productos/pistola" className='nav-link'>PISTOLAS</Link>  </NavDropdown.Item>
                <NavDropdown.Item> <Link to="/productos/subfusil" className='nav-link'>SUBFUSILES</Link> </NavDropdown.Item>
                <NavDropdown.Item> <Link to="/productos/sniper" className='nav-link'>SNIPER</Link> </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="#PreguntasFrecuentes">PREGUNTAS FRECUENTES</Nav.Link>
              <Nav.Link href="#contacto">CONTACTO</Nav.Link>
              <NavLink>
                <Link to="/carrito"><CartWidget /></Link>
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav.Link href="#inicio"><img src="./logo.png" alt="Logo" />
              <Navbar.Brand id='logo' href="#home">SkinPro</Navbar.Brand></Nav.Link>
            <Nav className="me-auto">
              <Nav.Link href={props.hrefLinkFacebook}>{props.textLinkFacebook}</Nav.Link>
              <Nav.Link href={props.hrefLinkInstagram}>{props.textLinkInstagram}</Nav.Link>
              <Nav.Link href={props.hrefLinkSteam}>{props.textLinkSteam}</Nav.Link>
              <CartWidget />
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }


}

export default NavBar;