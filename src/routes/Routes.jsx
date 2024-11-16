import { Route } from "react-router";
import { Home } from "../pages/Home.jsx";
import { PopularMovies } from "../pages/DisplayPopularMovies.jsx";
import {PopularMovieInfo} from "../pages/DisplayPopularInfo.jsx";
// import { UpcomingMovies } from "../pages/UpcomingMovies.jsx";
// import { About } from "../pages/About.jsx";

export const routesPage = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/popular-movies" element={<PopularMovies />} />
    <Route path="/popular-movie-info" element={<PopularMovieInfo/>} />
    {/* <Route path="/upcoming-movies" element={<UpcomingMovies />} />
    <Route path="/about" element={<About />} /> */}
  </>
);