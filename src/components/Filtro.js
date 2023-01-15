import React, { useState } from 'react';
import { useEffect } from "react";
import Database from './DataBase';
import filteredDatabase from './Functions';


const Filtro = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Database);
      }, 1000);
    });
    getProducts.then((result) => {
      setProducts(result);
      setLoading(false);
    });
  }, []);


  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === 'todos') {
      filteredDatabase = Database;
    } else {
      const filtered = Database.filter((product) => product.categoria === value);
      filteredDatabase = filtered;
    }

    console.log(handleFilter)
  };

  return (
    <>
      <select onChange={handleFilter} name="select" id="select" className="filtro">
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
