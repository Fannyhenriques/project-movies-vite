/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Header } from "../components/sections/Header.jsx";
import {Grid} from "../components/ui/Grid.jsx";

export const UpcomingMovies = ({ upcomingMovies, isLoading }) => {

  if (isLoading) {
        return <p>Loading Upcoming Movies...</p>;
    }  
  return (
    <>
    <Header/>
      <h2>UPCOMING MOVIES</h2>
      <div>
        <Grid>
          {upcomingMovies && upcomingMovies.length > 0 ? (
            upcomingMovies.map((movie) => (
              <div key={movie.id}>
                <Link to={`/upcoming-movie-info/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
                <span>{movie.title}</span>
              </div>
            ))
          ) : (
            <p>No movies available.</p>
          )}
        </Grid>
      </div>
    </>
  );
};