import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Contacto from './Contacto';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import { BrowserRouter } from 'react-router-dom';
import Nosotros from './Nosotros';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Nosotros/>
        <Main/>
        <PreguntasFrecuentes/>
        <Contacto/>
        <Footer/> 
    </BrowserRouter>
  );
}

export default App;
