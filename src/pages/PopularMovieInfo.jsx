/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


export const PopularMovieInfo = ({popularMovieInfo, isLoading}) => {
  console.log(popularMovieInfo)
  if (isLoading) {
    return <p>Loading Movie Details</p>
  }

  return(
    <> 
    <Link to="/">Go back to Home</Link>
    <div>
      <h2>{popularMovieInfo.title}</h2>
      <img
          src={`https://image.tmdb.org/t/p/w500${popularMovieInfo.poster_path}`}
          alt={popularMovieInfo.title}
        />
        <p>{popularMovieInfo.overview}</p>
        <p>Release Date: {popularMovieInfo.release_date}</p>
        <p>Rating: {popularMovieInfo.vote_average}</p>     
    </div>
    </>
  )
};