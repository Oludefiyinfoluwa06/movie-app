import { Dispatch, SetStateAction } from "react";

export interface SearchProps {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}

export interface Movies {
    Title: string;
    imdbID: string;
    Poster: string;
    Year: string;
}