import React, { useState } from 'react';
import { useEffect } from "react";
import Database from './DataBase';
import Galeria from './Galeria';


function handleCategoryChange(event, setFilteredDatabase) {
  const selectedCategory = event.target.value;
  let filteredDatabase;
  if (selectedCategory === "todos") {
    filteredDatabase = Database;
  } else {
    filteredDatabase = Database.filter(item => item.categoria === selectedCategory);
  }
  setFilteredDatabase(filteredDatabase);
}

const Filtro = () => {
  const [filteredDatabase, setFilteredDatabase] = useState(Database);

  useEffect(() => {
    const select = document.querySelector("#select");
    select.addEventListener("change", event => handleCategoryChange(event, setFilteredDatabase));
  }, []);

  return (
    <>
      <select name="select" id="select" className="filtro">
        <option value="todos">Todos</option>
        <option value="Cuchillos">Cuchillos</option>
        <option value="Guantes">Guantes</option>
        <option value="Rifles">Rifles</option>
        <option value="Sniper">Sniper</option>
        <option value="Subfusiles">Subfusiles</option>
        <option value="Escopetas">Escopetas</option>
        <option value="Personajes">Personajes</option>
      </select>
    </>
  );
};

export default Filtro;
