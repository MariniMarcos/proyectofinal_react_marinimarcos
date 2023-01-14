import React from 'react'
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Carrito from './Carrito';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import Contacto from './Contacto';



function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </main>
    );
  }
  export default Main;


  
