import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function NavBar_Rooms() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/rooms/3share">
          <Button variant="contained" color="success">3Share</Button>
          </Link>
        </li>
        <br></br>
        <li>
          <Link to="/rooms/4share">
          <Button variant="contained" color="success">4Share</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar_Rooms;
