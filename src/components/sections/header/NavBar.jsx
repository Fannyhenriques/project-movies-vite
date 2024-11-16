import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/upcoming-movies"> Upcoming Movies </NavLink>
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
        </ul>
      </nav>
    );
  };