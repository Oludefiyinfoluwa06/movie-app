import { useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./routes/Home";
import MovieDetails from "./routes/MovieDetails";

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const router = createBrowserRouter (
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}>
          <Route index element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
        </Route>
        <Route path="/:id" element={<MovieDetails />} />
      </>
    )
  );

  return (
    <div className="bg-black min-h-screen text-white p-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;