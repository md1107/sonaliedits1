import { Routes, Route, useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import Home from "./components/home";

function App() {
  return (
    <>
      {import.meta.env.VITE_TEMPO && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      </Routes>
    </>
  );
}
