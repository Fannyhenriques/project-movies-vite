import { BrowserRouter, Routes } from "react-router-dom";
import { routesPage } from "./routes/Routes.jsx";

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