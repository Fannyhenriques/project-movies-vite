/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import arrow from "./../assets/arrow.png";

const GoBackWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  z-index: 1;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    color: #FFF; 
    box-shadow: #FFF;
    text-shadow: 1px 0px 1px white;
  }
`;

const ArrowIcon = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(1);
  `;

const MoviePoster = styled.img`
position: absolute;
object-fit: cover;
width: 100vw;
height: 100vh;
/* width: 100vw;
height: auto; */
opacity: 0.3;
`;

const MovieImg = styled.img`
width: 350px;
height: 400px;
border: 2px solid white;
`;

const MovieWrapper = styled.div`
  position: absolute; /* To position it relative to the poster */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center horizontally and vertically */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 70%;
  color: white;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  padding-top: 90px; 
`;

const Title = styled.h2`
  font-weight: 1000;
  padding-bottom: 5px;
`;

const OverView = styled.p`
  padding-bottom: 15px;
`;

const Rating = styled.p`
  color: #000;
  font-weight: 700;
  border: 1px solid #FFF;
  background-color: #FFF;
  display: inline;
  padding: 5px;
`;

const Star = styled.span`
  color: #fac107;
  font-size: 20px;
`;

const ReleaseDate = styled.p`
  padding-top: 15px;
  font-weight: 200;
`;

const Date = styled.span`
  font-weight: 700;
`;

export const PopularMovieInfo = ({ popularMovieInfo, isLoading }) => {
  console.log(popularMovieInfo)
  if (isLoading) {
    return <p>Loading Movie Details</p>
  }

  return (
    <>
      <GoBackWrapper>
        <StyledLink to="/">
          <ArrowIcon src={arrow} alt="Back arrow" />
          Go Back
        </StyledLink>
      </GoBackWrapper>
      <div>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w1280${popularMovieInfo.backdrop_path}`}
          alt={popularMovieInfo.title} />
        <MovieWrapper>
          <MovieImg src={`https://image.tmdb.org/t/p/w500${popularMovieInfo.poster_path}`}
            alt={popularMovieInfo.title} />
          <ContentBox>
            <Title>{popularMovieInfo.title}</Title>
            <OverView>{popularMovieInfo.overview}</OverView>
            <Rating> <Star> ★ </Star> {popularMovieInfo.vote_average.toFixed(1)}</Rating>
            <ReleaseDate>Release Date: <br /> <Date>{popularMovieInfo.release_date}</Date></ReleaseDate>
          </ContentBox>
        </MovieWrapper>
      </div>
    </>
  );
};