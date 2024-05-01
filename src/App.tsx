import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./routes/Home";
import MovieDetails from "./routes/MovieDetails";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
  const router = createBrowserRouter (
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/:id" element={<MovieDetails />} />
      </>
    )
  );

  return (
    <div className="bg-black min-h-screen text-white p-5">
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
    </div>
  );
}

export default App;