import { Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { Movies } from "../api/Movies.jsx";

export const routesPage = [
  <Route key="home" path="/" element={<Home />} />,
  <Route key="popular-movies" path="/popular-movies" element={<Movies />} />,
  <Route
    key="popular-movie-info"
    path="/popular-movie-info/:movieId"
    element={<Movies />}
  />,
];
