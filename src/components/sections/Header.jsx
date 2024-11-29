import styled from "styled-components";
import { NavBar } from "./NavBar";
import background from "../../assets/background.jpg";

const HeaderContainer = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 3) 100%),url(${background});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  height: 150px;
  margin: 0;
  padding-top: 50px;
  width: 100%;
`;

const Heading = styled.h1`
  font-family: "Bangers", system-ui;
  text-shadow: 1px 1px 1px #fff, -1px -1px 3px #000;
  font-weight: 400;
  font-size: 60px;
  padding: 0;
  margin: 0;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Heading>MOVIE LIBRARY</Heading>
      <NavBar />
    </HeaderContainer>
  );
};