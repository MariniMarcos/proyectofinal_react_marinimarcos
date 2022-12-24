import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./ItemListContainer";

function App() {
  return (
    <div>
     <Header/>
     <Main/>
     <ItemListContainer greeting="Hola soy un greeting" /> 
     <Footer/> 
    </div>
  );
}

export default App;
