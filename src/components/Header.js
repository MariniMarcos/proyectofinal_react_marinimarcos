import NavBar from "./NavBar";


function Header() {
    
    const isHeader = true

    return (
        <>
            <header>
            <NavBar  isHeader={isHeader}/>
            </header>
        </>
    );
  }
  
  export default Header;