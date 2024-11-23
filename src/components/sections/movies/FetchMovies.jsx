import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PopularMovies } from "../movies/PopularMovies";
import { PopularMovieInfo } from "../../../pages/PopularMovieInfo";

export const FetchMovies = () => {
  const API_KEY = "5f89608902c84def71e6303da949a9c4";
  const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie`;
  const { movieId } = useParams(); // Extract `movieId` from the route params
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularMovieDetails, setPopularMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("movieId", movieId)

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

  useEffect(() => {
    if (movieId) {
      const fetchPopularMovieDetails = async () => {
        try {
          const url = `${MOVIE_DETAILS_URL}/${movieId}?api_key=${API_KEY}&language=en-US`;
          const response = await fetch(url);
          const data = await response.json();
          setPopularMovieDetails(data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchPopularMovieDetails();
    }
  }, [movieId, MOVIE_DETAILS_URL]);

  return (
    <>
      {!movieId && <PopularMovies popularMovies={popularMovies} isLoading={isLoading} />}
      {movieId && popularMovieDetails &&(
        <PopularMovieInfo
          popularMovieInfo={popularMovieDetails}
          isLoading={isLoading}
        />
      )}
    </>
  );
};
