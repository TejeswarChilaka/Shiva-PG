import { Link } from "react-router-dom";

function NavBar_About() {
  return (
    <>
      <ul>
        <li>
          <Link to="/about/dining">
            <button type="button">Dining</button>
          </Link>
        </li>
        <li>
          <Link to="/about/yoga">
            <button type="button">Yoga</button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar_About;
