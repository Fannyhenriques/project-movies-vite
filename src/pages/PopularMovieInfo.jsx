/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const MoviePoster = styled.img`
position: absolute;
object-fit: cover;
/* width: 100vw;
height: auto; */
opacity: 0.6;
`;

const MovieImg = styled.img`
width: 200px;
height: auto;
border: 1px solid white;
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
        <MovieImg src={`https://image.tmdb.org/t/p/w500${popularMovieInfo.poster_path}`}
          alt={popularMovieInfo.title} />
        <h2>{popularMovieInfo.title}</h2>
        <p>{popularMovieInfo.overview}</p>
        <p>Release Date: {popularMovieInfo.release_date}</p>
        <p>Rating: {popularMovieInfo.vote_average}</p>
      </div>
    </>
  );
};