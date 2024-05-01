import { Dispatch, SetStateAction } from "react";

export interface Movies {
    Title: string;
    imdbID: string;
    Poster: string;
    Year: string;
}

export interface MovieContextValues {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}

export interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Poster: string;
    imdbRating: string;
    imdbID: string;
    Type: string;
}