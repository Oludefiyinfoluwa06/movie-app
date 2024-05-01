import axios from "axios";
import { useEffect, useState } from "react";
import { Movies } from "../constants";
import { Link } from "react-router-dom";

import noMovies from '../assets/no-movies.png';
import { useMovieContext } from "../contexts/MovieContext";

const Home = () => {
    const [movies, setMovies] = useState<Movies[] | undefined>();
    const { searchQuery, setSearchQuery } = useMovieContext();

    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`);
                console.log(response);
                setMovies(response.data.Search);
            } catch (error) {
                console.log(error);
            }
        }

        getAllMovies();
    }, [apiKey, searchQuery, setSearchQuery]);

    return (
        <>
            {movies === undefined ? (
                <div className="flex items-center justify-center flex-col gap-3 min-h-screen">
                    <img src={noMovies} alt="" className="w-[400px]" />
                    <p>Search to see movies</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {searchQuery && <h1>Search Query: <span>{searchQuery}</span></h1>}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                        {movies.map(item => (
                            <div key={item.imdbID} className="relative">
                                <img src={item.Poster === 'N/A' ? noMovies : item.Poster} alt={item.Title} className="h-[300px] w-[300px] object-cover" />
                                <div className="absolute bottom-0 p-3 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.75)] w-full">
                                    <Link to={`/${item.imdbID}`} className="uppercase mt-3 hover:text-red-500 transition-all duration-300">{item.Title}</Link>
                                    <p>Year: {item.Year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;