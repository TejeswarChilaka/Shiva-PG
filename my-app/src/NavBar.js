import { Link } from "react-router-dom";
import  Navbar from "react-bootstrap/Navbar";


const  MyNavBar = () =>{
    return(
        
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Shiva PG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <nav>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/rooms">Rooms</Link></li>
                <li> <Link to="/gym">Gym</Link></li>
                <li> <Link to="/dining">Dining</Link></li>
                <li> <Link to="/maintenance">Maintenance</Link></li>
            </ul>
        </nav>
        </Navbar>
    ); 
}

export default MyNavBar;