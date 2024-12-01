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

export const UpcomingMovieInfo = ({ upcomingMovieInfo, isLoading }) => {
  console.log(upcomingMovieInfo)

  if (isLoading) {
    return <p>Loading Movie Details</p>
  }

  return (
    <>
      <Link to="/">Back to Home</Link>
      <Link to="/upcoming-movies">Back to Upcoming Movies</Link>
      <div>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w1280${upcomingMovieInfo.backdrop_path}`}
          alt={upcomingMovieInfo.title}
        />
        <MovieWrapper>
          <MovieImg src={`https://image.tmdb.org/t/p/w500${upcomingMovieInfo.poster_path}`} />
          <ContentBox>
            <h2>{upcomingMovieInfo.title}</h2>
            <p>{upcomingMovieInfo.overview}</p>
            <p>Rating: {upcomingMovieInfo.vote_average}</p>
            <p>Release Date:<br /> {upcomingMovieInfo.release_date}</p>
          </ContentBox>
        </MovieWrapper>
      </div>
    </>
  );
};