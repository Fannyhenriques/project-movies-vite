/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

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
width: 250px;
height: 300px;
border: 1px solid white;
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
  padding-top: 60px; 
`;

export const PopularMovieInfo = ({ popularMovieInfo, isLoading }) => {
  console.log(popularMovieInfo)
  if (isLoading) {
    return <p>Loading Movie Details</p>
  }

  return (
    <>
      <Link to="/">Go back to Home</Link>
      <div>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w1280${popularMovieInfo.backdrop_path}`}
          alt={popularMovieInfo.title} />
        <MovieWrapper>
          <MovieImg src={`https://image.tmdb.org/t/p/w500${popularMovieInfo.poster_path}`}
            alt={popularMovieInfo.title} />
          <ContentBox>
            <h2>{popularMovieInfo.title}</h2>
            <p>{popularMovieInfo.overview}</p>
            <p>Release Date: {popularMovieInfo.release_date}</p>
            <p>Rating: {popularMovieInfo.vote_average}</p>
          </ContentBox>
        </MovieWrapper>
      </div>
    </>
  );
};