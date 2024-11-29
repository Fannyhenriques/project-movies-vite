import styled from "styled-components";
import { Header } from "../components/sections/Header.jsx";
import { FetchMovies } from "../components/sections/movies/FetchMovies.jsx";


export const Home = () => {
  return (
    <>
      <Header />
      <FetchMovies />
    </>
  );
};