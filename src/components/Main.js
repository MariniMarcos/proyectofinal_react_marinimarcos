import { useEffect } from "react";
import Product from "./Card";
import Database from "./DataBase";
import {filtroPistola,filtroRifle, filtroSniper, filtroCuchillo, filtroGuantes, filtroSubfusil,filtroEscopetas,filtroPersonajes} from "./Functions" 
import Galeria from "./Galeria";
import Filtro  from "./Functions";



function Main() {
    return (
        <>
        <main>
        <section className="nosotros" id="nosotros">
            <div className="nosotros-text">
            <h1>NOSOTROS</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem itaque at cupiditate alias unde nihil delectus doloremque impedit exercitationem error aliquam quisquam quibusdam dolores velit temporibus, quos quam iste incidunt.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem itaque at cupiditate alias unde nihil delectus doloremque impedit exercitationem error aliquam quisquam quibusdam dolores velit temporibus, quos quam iste incidunt.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem itaque at cupiditate alias unde nihil delectus doloremque impedit exercitationem error aliquam quisquam quibusdam dolores velit temporibus, quos quam iste incidunt.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem itaque at cupiditate alias unde nihil delectus doloremque impedit exercitationem error aliquam quisquam quibusdam dolores velit temporibus, quos quam iste incidunt.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem itaque at cupiditate alias unde nihil delectus doloremque impedit exercitationem error aliquam quisquam quibusdam dolores velit temporibus, quos quam iste incidunt.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem itaque at cupiditate alias unde nihil delectus doloremque impedit exercitationem error aliquam quisquam quibusdam dolores velit temporibus, quos quam iste incidunt.    
            </p>
            </div>  
        </section>
        
        <section className="productos" id="skins">
        <div className="productos-header">
            <h2>SKINS DISPONIBLES</h2>
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
        </div>
        <div className="cards">
            <Galeria/>
        </div>
        </section>
        </main>
        </>
    );
  }
  export default Main;


  
