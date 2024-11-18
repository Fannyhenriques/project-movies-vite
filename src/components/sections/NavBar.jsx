import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Nabvar = styled.nav `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`;

const NavList = styled.ul `
list-style-type: none;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 100px;
`;

export const NavBar = () => {
    return (
      <Nabvar>
        <NavList>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/upcoming-movies"> Upcoming Movies </NavLink>
          </li>
        </NavList>
      </Nabvar>
    );
  };