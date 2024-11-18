//parent component that handles fetching data from api 
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PopularMovies } from "../components/sections/PopularMovies";
import { PopularMovieInfo } from "../pages/PopularMovieInfo";

export const Movies = () => {
  const API_KEY = "5f89608902c84def71e6303da949a9c4";
  const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const MOVIE_DETAILS_URL = "https://api.themoviedb.org/3/movie";
  const { movieId } = useParams();
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularMovieDetails, setPopularMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

// Fetching popular movies
useEffect(() => {
  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(POPULAR_MOVIES_URL);
      const data = await response.json();
      setPopularMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setIsLoading(false);  
    }
  };
  fetchPopularMovies();
}, []);

//-------------------------------------------------------------------------
//Function to fetch movie details based on movie ID
useEffect(() => {
  const fetchPopularMovieDetails = async (id) => {
    try {
      const url = (`${MOVIE_DETAILS_URL}/${id}?api_key=${API_KEY}&language=en-US`);
      const response = await fetch(url);
      const data = await response.json();
      console.log("Movie details data:", data);
      setPopularMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setIsLoading(false);
    }
  };
  if (movieId) {
    fetchPopularMovieDetails(movieId);
  }
}, [movieId]);

//----------------------------------------------------------------------------
//Function to fetch upcoming movies 

return(
    <>
      <PopularMovies popularMovies={popularMovies} isLoading={isLoading}/>
      {movieId && ( 
        <PopularMovieInfo 
          popularMovieInfo={popularMovieDetails} 
          isLoading={isLoading}
        />
      )}
    </>
  );
};