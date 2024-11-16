import { BrowserRouter, Routes, Link, NavLink } from "react-router-dom";
import { routesPage } from "./routes/Routes"; 
import { GlobalStyles } from "./styles/GlobalStyles";
import { NavBar } from "./components/sections/header/NavBar";

export const App = () => {
  return (
    <BrowserRouter 
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
    >
    <Routes>{routesPage}</Routes>
    </BrowserRouter>
  );
};
