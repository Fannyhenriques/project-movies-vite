import { useLocation, useParams } from "react-router-dom"; // Import useLocation and useParams
import { useEffect, useState } from "react";
import { PopularMovies } from "../movies/PopularMovies";
import { UpcomingMovies } from "../../../pages/UpcomingMovies";
import { PopularMovieInfo } from "../../../pages/PopularMovieInfo"; // Import the PopularMovieInfo component

export const FetchMovies = () => {
  const API_KEY = "5f89608902c84def71e6303da949a9c4";
  const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie`;  // Base URL for movie details
  const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovieDetails, setPopularMovieDetails] = useState(null);
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
        } else if (location.pathname === "/upcoming-movies") {
          // Fetch upcoming movies on the upcoming movies page
          const response = await fetch(UPCOMING_MOVIES_URL);
          const data = await response.json();
          setUpcomingMovies(data.results || []);
        } else if (movieId) {
          // Fetch movie details if movieId is present in the URL
          const response = await fetch(`${MOVIE_DETAILS_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
          const data = await response.json();
          setPopularMovieDetails(data);
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
      {movieId && popularMovieDetails && (
        <PopularMovieInfo popularMovieInfo={popularMovieDetails} isLoading={isLoading} />
      )}
    </>
  );
};





// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { PopularMovies } from "../movies/PopularMovies";
// import { PopularMovieInfo } from "../../../pages/PopularMovieInfo";
// import { UpcomingMovies } from "../../../pages/UpcomingMovies";

// export const FetchMovies = () => {
//   const API_KEY = "5f89608902c84def71e6303da949a9c4";
//   const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
//   const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie`;
//   const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

//   const { movieId } = useParams(); 
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [popularMovieDetails, setPopularMovieDetails] = useState(null);
//   const [upcomingMovies, setUpcomingMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch data helper function
//   const fetchData = async (url, setter) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setter(data.results || data); // Adjust depending on the response structure
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Fetching popular movies
//   useEffect(() => {
//     fetchData(POPULAR_MOVIES_URL, setPopularMovies);
//   }, []);

//   // Fetching movie details when movieId is available
//   useEffect(() => {
//     if (movieId) {
//       const url = `${MOVIE_DETAILS_URL}/${movieId}?api_key=${API_KEY}&language=en-US`;
//       fetchData(url, setPopularMovieDetails);
//     }
//   }, [movieId]);

//   // Fetching upcoming movies
//   useEffect(() => {
//     fetchData(UPCOMING_MOVIES_URL, setUpcomingMovies);
//   }, []);

//   return (
//     <>
//       {!movieId && <PopularMovies popularMovies={popularMovies} isLoading={isLoading} />}
//       {movieId && popularMovieDetails && (
//         <PopularMovieInfo
//           popularMovieInfo={popularMovieDetails}
//           isLoading={isLoading}
//         />
//       )}
//       {!movieId && <UpcomingMovies upcomingMovies={upcomingMovies} isLoading={isLoading} />}
//     </>
//   );
// };






// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { PopularMovies } from "../movies/PopularMovies";
// import { PopularMovieInfo } from "../../../pages/PopularMovieInfo";
// import { UpcomingMovies } from "../../../pages/UpcomingMovies";

// export const FetchMovies = () => {
//   const API_KEY = "5f89608902c84def71e6303da949a9c4";
//   const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
//   const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie`;
//   const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

//   const { movieId } = useParams(); // Extracting the `movieId` from the route params

//   const [popularMovies, setPopularMovies] = useState([]);
//   const [popularMovieDetails, setPopularMovieDetails] = useState(null);
//   const [upcomingMovies, setUpcomingMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   console.log("movieId", movieId)

//   //Fetching the popular movies
//   useEffect(() => {
//     const fetchPopularMovies = async () => {
//       try {
//         const response = await fetch(POPULAR_MOVIES_URL);
//         const data = await response.json();
//         setPopularMovies(data.results || []);
//       } catch (error) {
//         console.error("Error fetching popular movies:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchPopularMovies();
//   }, []);

//   //Fetching the information about popular movies using movieId
//   useEffect(() => {
//     if (movieId) {
//       const fetchPopularMovieDetails = async () => {
//         try {
//           const url = `${MOVIE_DETAILS_URL}/${movieId}?api_key=${API_KEY}&language=en-US`;
//           const response = await fetch(url);
//           const data = await response.json();
//           setPopularMovieDetails(data);
//         } catch (error) {
//           console.error("Error fetching movie details:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       fetchPopularMovieDetails();
//     }
//   }, [movieId, MOVIE_DETAILS_URL]);

//   //Fetching upcoming movies 
//   useEffect(() => {
//     const fetchUpcomingMovies = async () => {
//       try {
//         const response = await fetch(UPCOMING_MOVIES_URL);
//         const data = await response.json();
//         setUpcomingMovies(data.results || []);
//       } catch (error) {
//         console.error("Error fetching upcoming movies:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchUpcomingMovies();
//   }, []);

//   return (
//     <>
//       {!movieId && <PopularMovies popularMovies={popularMovies} isLoading={isLoading} />}
//       {movieId && popularMovieDetails &&(
//         <PopularMovieInfo
//           popularMovieInfo={popularMovieDetails}
//           isLoading={isLoading}
//         />
//       )}
//       {!movieId && <UpcomingMovies upcomingMovies={upcomingMovies} isLoading={isLoading} />}
//     </>
//   );
// };
