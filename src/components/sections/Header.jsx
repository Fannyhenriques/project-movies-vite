import styled from "styled-components";
import { NavBar } from "./NavBar";
import background from "../../assets/background.jpg";

const HeaderContainer = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%),url(${background});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  height: 200px;
  margin: 0;
  padding-top: 100px;
  width: 100%;
`;

const Heading = styled.p`
  font-family: "Bangers", system-ui;
  font-weight: 400;
  font-size: 50px;
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