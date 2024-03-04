import { Link } from "react-router-dom";

function NavBar_Rooms() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/rooms/3share">
            <button type="button">3 Share</button>
          </Link>
        </li>
        <li>
          <Link to="/rooms/4share">
            <button type="button">4 Share</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar_Rooms;
