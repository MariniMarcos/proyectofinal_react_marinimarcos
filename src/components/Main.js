import React from 'react'
import Galeria from "./Galeria";
import Filtro from "./Filtro";




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
            <Filtro/>
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


  
