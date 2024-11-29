import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PopularMovies } from "../movies/PopularMovies";
import { UpcomingMovies } from "../../../pages/UpcomingMovies";
import { PopularMovieInfo } from "../../../pages/PopularMovieInfo";
import { UpcomingMovieInfo } from "../../../pages/UpcomingMovieInfo";

export const FetchMovies = () => {
  const API_KEY = "5f89608902c84def71e6303da949a9c4";
  const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie`;

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovieDetails, setPopularMovieDetails] = useState(null);
  const [upcomingMovieDetails, setUpcomingMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation(); // Get the current route
  const { movieId } = useParams(); // Get the movieId from the URL

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        if (location.pathname === "/" && !movieId) {
          // Fetch popular movies on the homepage (no movieId in URL)
          const response = await fetch(POPULAR_MOVIES_URL);
          const data = await response.json();
          setPopularMovies(data.results || []);
        } else if (location.pathname === "/upcoming-movies" && !movieId) {
          // Fetch upcoming movies on the upcoming movies page (no movieId in URL)
          const response = await fetch(UPCOMING_MOVIES_URL);
          const data = await response.json();
          setUpcomingMovies(data.results || []);
        } else if (movieId && location.pathname === `/popular-movie-info/${movieId}`) {
          // Fetch popular movie details if movieId is present in the URL
          const response = await fetch(`${MOVIE_DETAILS_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
          const data = await response.json();
          setPopularMovieDetails(data);
        } else if (movieId && location.pathname === `/upcoming-movie-info/${movieId}`) {
          // Fetch upcoming movie details if movieId is present in the URL for upcoming movies
          const response = await fetch(`${MOVIE_DETAILS_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
          const data = await response.json();
          setUpcomingMovieDetails(data);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [location.pathname, movieId]); // Re-fetch data when location or movieId changes

  return (
    <>
      {!movieId && location.pathname === "/" && (
        <PopularMovies popularMovies={popularMovies} isLoading={isLoading} />
      )}
      {!movieId && location.pathname === "/upcoming-movies" && (
        <UpcomingMovies upcomingMovies={upcomingMovies} isLoading={isLoading} />
      )}
      {movieId && location.pathname === `/popular-movie-info/${movieId}` && popularMovieDetails && (
        <PopularMovieInfo popularMovieInfo={popularMovieDetails} isLoading={isLoading} />
      )}
      {movieId && location.pathname === `/upcoming-movie-info/${movieId}` && upcomingMovieDetails && (
        <UpcomingMovieInfo upcomingMovieInfo={upcomingMovieDetails} isLoading={isLoading} />
      )}
    </>
  );
};