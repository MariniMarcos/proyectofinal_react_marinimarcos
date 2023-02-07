import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Contacto from './Contacto';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import { BrowserRouter } from 'react-router-dom';
import Nosotros from './Nosotros';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  CustomProvider  from "./CustomProvider";

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header />
        <Nosotros />
        <Main />
        <PreguntasFrecuentes />
        <Contacto />
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </CustomProvider>
  );
}

export default App;
