import { createContext, ReactNode, useState } from "react";
import { MovieContextValues } from "../constants";

const defaultValues: MovieContextValues = {
  searchQuery: '',
  setSearchQuery: () => {},
};

export const MovieContext = createContext<MovieContextValues>(defaultValues);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const values: MovieContextValues = { searchQuery, setSearchQuery }

    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}