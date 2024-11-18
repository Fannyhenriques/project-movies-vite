import styled from "styled-components";
import { NavBar } from "./NavBar";

const HeaderContainer = styled.div`
background-color: black;
color: white;
text-align: center;
height: 300px;
`;

export const Header = () => {
  return(
    <HeaderContainer> 
    <div>Movie Library</div>
    <NavBar>navbar</NavBar>
    </HeaderContainer>
  );
};