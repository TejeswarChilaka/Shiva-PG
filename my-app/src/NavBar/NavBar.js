import { Link } from "react-router-dom";
import  Navbar from "react-bootstrap/Navbar";
// import NavBarR from "./NavBar_Rooms";


const  MyNavBar = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Shiva PG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <nav style={{width:'100%'}}>
            <ul style={{width:'100%', display: "flex", justifyContent:'space-around'}}>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/rooms">Rooms</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                <li> <Link to="/gallery">Gallery</Link></li>
                <li> <Link to="/profile">Profile</Link></li>
                <li> <button > <Link to="/signup"> SignUp </Link> </button></li>
                
            </ul>
            
        </nav>
        </Navbar>
    ); 
}

export default MyNavBar;

// const MyNavbar = () => {
//     return (
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link to="/">Home</Nav.Link>
//             <Nav.Link to="/about">About</Nav.Link>
//             <Nav.Link to="/rooms">Rooms</Nav.Link>
//             <Nav.Link to="/contact">Contact</Nav.Link>
//             <Nav.Link to="/gallery">Gallery</Nav.Link>
//             <Nav.Link to="/profile">Profile</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   };
  
//   export default MyNavbar;