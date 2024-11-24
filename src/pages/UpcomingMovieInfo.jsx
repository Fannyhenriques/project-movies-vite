/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


export const UpcomingMovieInfo = ({upcomingMovieInfo, isLoading}) => {
  console.log(upcomingMovieInfo)

  if (isLoading) {
    return <p>Loading Movie Details</p>
  }

  return(
    <> 
    <Link to="/">Home</Link>
    <Link to="/upcoming-movies">Back to Upcoming Movies</Link>
    <div>
      <h2>{upcomingMovieInfo.title}</h2>
      <img
          src={`https://image.tmdb.org/t/p/w500${upcomingMovieInfo.poster_path}`}
          alt={upcomingMovieInfo.title}
        />
        <p>{upcomingMovieInfo.overview}</p>
        <p>Release Date: {upcomingMovieInfo.release_date}</p>
        <p>Rating: {upcomingMovieInfo.vote_average}</p>     
    </div>
    </>
  )
};