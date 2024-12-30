import { Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { FetchMovies } from "../components/sections/movies/FetchMovies.jsx";
import { About } from "../pages/About.jsx";

export const routesPage = (
  <>
    <Route key="home" path="/" element={<Home />} />
    <Route key="popular-movies" path="/popular-movies" element={<FetchMovies />} />
    <Route key="popular-movie-info" path="/popular-movie-info/:movieId" element={<FetchMovies />} />
    <Route key="upcoming-movies" path="/upcoming-movies" element={<FetchMovies />} />
    <Route key="upcoming-movie-info" path="/upcoming-movie-info/:movieId" element={<FetchMovies />} />
    <Route key="About" path="/About" element={<About />} />
  </>
);

