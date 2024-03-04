import { Link } from "react-router-dom";

function NavBar_SignUp() {
  return (
    <>
      <ul>
        <li>
          <Link to="/signup/login">
            <button type="button">LogIn</button>
          </Link>
        </li>
        <li>
          <Link to="/signup/signin">
            <button type="button">SignIn</button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar_SignUp;
