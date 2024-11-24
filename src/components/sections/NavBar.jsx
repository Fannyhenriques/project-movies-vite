import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Nabvar = styled.nav `
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 150px;
`;

const NavList = styled.ul `
list-style-type: none;
display: flex;
flex-direction: row;
align-items: flex-end;
gap: 100px;
;
`;
const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const NavBar = () => {
    return (
      <Nabvar>
        <NavList>
          <li>
            <NavLinkStyled to="/"> Home </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/upcoming-movies"> Upcoming Movies </NavLinkStyled>
          </li>
        </NavList>
      </Nabvar>
    );
  };