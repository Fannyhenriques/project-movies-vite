//parent component that handles fetching data from api 
import { useEffect, useState } from "react";
import { PopularMovies } from "../pages/DisplayPopularMovies";
import { PopularMovieInfo } from "../pages/DisplayPopularInfo";

export const Movies = () => {
  const API_KEY = "5f89608902c84def71e6303da949a9c4";
  const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
  const [popularMovies, setPopularMovies] = useState([]);
  // const [popularMovieDetails, setPopularMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

// Fetching popular movies
useEffect(() => {
  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
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
// Function to fetch movie details based on movie ID
// useEffect(() => {
//   const fetchPopularMovieDetails = async ({movieId}) => {
//     try {
//       const url = `${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`;
//       const response = await fetch(url);
//       const data = await response.json();
//       setPopularMovieDetails(data);
//     } catch (error) {
//       console.error("Error fetching movie details:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   if (movieId) {
//     fetchPopularMovieDetails();
//   }
// });

//----------------------------------------------------------------------------
//Function to fetch upcoming movies 

return(
  <>
  <PopularMovies popularMovies={popularMovies} isLoading={isLoading}/>
  {/* <PopularMovieInfo popularMovieInfo={popularMovieDetails} movieId={movieId} isLoading={isLoading}/> */}
  </>
)
}

