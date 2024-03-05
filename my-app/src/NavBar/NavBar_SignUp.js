import { Link } from "react-router-dom";
import { Button } from '@mui/material';

function NavBar_SignUp() {
  return (
    <>
      <ul>
        <li>
          <Link to="/signup/login">
            <Button variant="contained" color="success">SignIn</Button>
          </Link>
        </li>
        <br/>
        <li>
          <Link to="/signup/signin">
          <Button variant="contained" color="success">SignUp</Button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar_SignUp;
