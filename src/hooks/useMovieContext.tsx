import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

export const useMovieContext = () => useContext(MovieContext);
