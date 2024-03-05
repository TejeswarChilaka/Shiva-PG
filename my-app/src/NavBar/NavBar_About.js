import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function NavBar_About() {
  return (
    <>
      <ul>
        <li>
          <Link to="/about/dining">
          <Button variant="contained" color="success">Dining</Button>
          </Link>
        </li>
        <br></br>
        <li>
          <Link to="/about/yoga">
          <Button variant="contained" color="success">Yoga</Button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar_About;
