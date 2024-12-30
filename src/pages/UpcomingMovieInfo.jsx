/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import arrow from "./../assets/arrow.png";

const GoBackWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 5px;
  top: 20px;
  left: 60px;

  @media (max-width: 786px) {
    top: 20px;
    padding-bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  z-index: 1;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  padding: 40px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    color: #FFF; 
    box-shadow: #FFF;
    text-shadow: 1px 0px 1px white;
  }

  @media (max-width: 786px) {
    padding-top: 10px;
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

const ArrowIcon = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(1);

  @media (max-width: 786px) {
    width: 25px;
    height: 25px;
  }
`;

const MoviePoster = styled.img`
  position: fixed;
  /* position: absolute; */
  object-fit: cover;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  opacity: 0.3;
  background-repeat: no-repeat; 

  @media (max-width: 786px) {
    min-height: auto;
    height: 100%;
  }
`;

const MovieImg = styled.img`
  width: 340px;
  height: 390px;
  border: 2px solid white;

  @media (max-width: 786px) {
    width: 210px;
    height: 310px;
    margin-top: 100px;
  }
`;

const MovieWrapper = styled.div`
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 70%;
  color: white;
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 20px;

  @media (max-width: 786px) {
    flex-direction: column;
    align-items: center; 
    width: 80%; 
    gap: 5px; 
    text-align: center;
    padding-top: 0px;
    min-height: auto;
    padding-top: 100px;
  }
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  padding-top: 60px; 

  @media (max-width: 786px) {
    padding-top: 5px;
  }
`;

const Title = styled.h2`
  font-weight: 1000;
  padding-bottom: 5px;

  @media (max-width: 786px) {
    font-size: 18px;
  }
`;

const OverView = styled.p`
  padding-bottom: 15px;

  @media (max-width: 786px) {
  line-height: 1.1;
  padding-bottom: 10px;
  }
`;

const Rating = styled.p`
  color: #000;
  font-weight: 700;
  border: 1px solid #FFF;
  background-color: #FFF;
  display: inline;
  padding: 5px;

  @media (max-width: 786px) {
    font-size: 14px;
  }
`;

const Star = styled.span`
  color: #fac107;
  font-size: 20px;
`;

const ReleaseDate = styled.p`
  padding-top: 15px;
  font-weight: 200;

  @media (max-width: 786px) {
    font-size: 16px;
    padding-bottom: 20px;
  }
`;


const Date = styled.span`
  font-weight: 700;
`;

export const UpcomingMovieInfo = ({ upcomingMovieInfo, isLoading }) => {
  console.log(upcomingMovieInfo)

  if (isLoading) {
    return <p>Loading Movie Details</p>
  }

  return (
    <>
      <GoBackWrapper>
        <StyledLink to="/upcoming-movies">
          <ArrowIcon src={arrow} alt="Back arrow" />
          Go Back
        </StyledLink>
      </GoBackWrapper>
      <div>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w1280${upcomingMovieInfo.backdrop_path}`}
          alt={upcomingMovieInfo.title}
        />
        <MovieWrapper>
          <MovieImg src={`https://image.tmdb.org/t/p/w500${upcomingMovieInfo.poster_path}`}
            alt={upcomingMovieInfo.title} />
          <ContentBox>
            <Title>{upcomingMovieInfo.title}</Title>
            <OverView>{upcomingMovieInfo.overview}</OverView>
            <Rating> <Star> ★ </Star> {upcomingMovieInfo.vote_average.toFixed(1)}</Rating>
            <ReleaseDate>Release Date:<br /> <Date>{upcomingMovieInfo.release_date}</Date></ReleaseDate>
          </ContentBox>
        </MovieWrapper>
      </div>
    </>
  );
};