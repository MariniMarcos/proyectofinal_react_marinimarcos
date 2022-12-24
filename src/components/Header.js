import ColorSchemesExample from "./NavBar";


function Header() {
    
    const isHeader = true

    return (
        <>
        <header>
        <ColorSchemesExample 
        isHeader={isHeader} 
        />
        </header>
        </>
    );
  }
  
  export default Header;