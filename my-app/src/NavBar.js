import { Link } from "react-router-dom";

const  NavBar = () =>{
    return(
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
    ); 
}

export default NavBar;