import { Routes, Route, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/home"));

function App() {
  // Tempo routes for storyboards
  let tempoRoutes = null;
  if (import.meta.env.VITE_TEMPO) {
    try {
      // Dynamic import for tempo routes to avoid SSR issues
      import("tempo-routes")
        .then((routes) => {
          tempoRoutes = useRoutes(routes.default);
        })
        .catch(() => {
          // Tempo routes not available
        });
    } catch (error) {
      // Tempo routes not available
    }
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      {tempoRoutes}
      <Routes>
        <Route path="/" element={<Home />} />
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
