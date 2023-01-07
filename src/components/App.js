import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import Contacto from './Contacto';
import PreguntasFrecuentes from './PreguntasFrecuentes';

function App() {
  return (
    <div>
     <Header/>
     <Main/>
     <ItemListContainer/> 
     <PreguntasFrecuentes/>
     <Contacto/>
     <Footer/> 
    </div>
  );
}

export default App;
