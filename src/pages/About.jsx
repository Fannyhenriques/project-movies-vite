import styled from "styled-components";
import { Header } from "../components/sections/Header";

const AboutContainer = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  text-align: center;
  gap: 10px;

  @media (max-width: 768px){
    width: 300px;
    text-align: left;
  }
`;

const AboutTitle = styled.h2`
  font-size: 30px;

  @media (max-width: 768px){
    font-size: 22px;
  }
`;

const AboutContent = styled.p`
  font-size: 20px;

  @media (max-width: 768px){
    font-size: 16px;
  }
`;

export const About = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <AboutTitle>About Our Movie Library </AboutTitle>
        <AboutContent>Welcome to our Movie Library – your go-to spot for discovering popular and upcoming films. Browse through the Popular Movies section to catch the latest box office hits, or explore Upcoming Movies to get a sneak peek at the most anticipated releases.<br /> <br />With detailed information on each movie, including summaries, release dates, and trailers, you&apos;ll always find your next film to watch. Enjoy the ultimate movie experience with us!</AboutContent>
      </AboutContainer>
    </>
  );
};