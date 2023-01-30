import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-bootstrap';


function Filtro() {
  return (
    <>
        <DropdownButton id="dropdown-basic-button" title="Filtrar Skins" menuVariant="dark">
        <Dropdown.Item><Link className='nav-link' to="/">TODOS</Link></Dropdown.Item>
        <Dropdown.Item><Link className='nav-link' to="/productos/guantes">GUANTES</Link></Dropdown.Item>
        <Dropdown.Item><Link className='nav-link' to="/productos/cuchillo">CUCHILLOS</Link></Dropdown.Item>
        <Dropdown.Item><Link className='nav-link' to="/productos/pistola">PISTOLAS</Link></Dropdown.Item>
        <Dropdown.Item><Link className='nav-link' to="/productos/subfusil">SUBFUSILES</Link></Dropdown.Item>
        <Dropdown.Item><Link className='nav-link' to="/productos/sniper">SNIPER</Link></Dropdown.Item>
        </DropdownButton>
    </>
   );

}
export default Filtro;



