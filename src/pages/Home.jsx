import styled from "styled-components";
import {Header} from "../components/sections/header/Header.jsx";
import { Movies } from "../api/Movies.jsx";


export const Home = () => {
  return (
    <>
    <Header/>
    <Movies/>
    </>  
  );
};