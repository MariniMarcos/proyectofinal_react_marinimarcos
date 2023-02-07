import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Filtro = () => {
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Filtrar Skins" menuVariant="dark">
        <Dropdown.Item>
          <Link className='nav-link' to="/">TODOS</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className='nav-link' to="/categoria/guantes">GUANTES</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className='nav-link' to="/categoria/cuchillo">CUCHILLOS</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className='nav-link' to="/categoria/pistola">PISTOLAS</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className='nav-link' to="/categoria/subfusil">SUBFUSILES</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className='nav-link' to="/categoria/sniper">SNIPER</Link>
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default Filtro;



