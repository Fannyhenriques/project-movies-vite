import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nabvar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 100px;

  @media (max-width:640px){
    justify-content: center;
    gap: 20px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: #c9c0c9;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  @media (max-width:640px){
    font-size: 16px;
  }
`;

export const NavBar = () => {
  return (
    <Nabvar>
      <NavList>
        <li>
          <NavLinkStyled to="/"> HOME </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/upcoming-movies"> UPCOMING MOVIES </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/about"> ABOUT </NavLinkStyled>
        </li>
      </NavList>
    </Nabvar>
  );
};