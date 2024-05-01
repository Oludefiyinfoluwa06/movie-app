import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Movie } from "../constants";
import { FaStar } from "react-icons/fa6";

const MovieDetails = () => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { id } = useParams();

    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    useEffect(() => {
        setLoading(true);

        const getAllMovies = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
                console.log(response);
                setMovie(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getAllMovies();
    }, [apiKey, id]);

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="border-2 border-t-0 p-4 rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="flex items-center justify-center gap-7 md:flex-row flex-col mt-5">
                    <img src={movie?.Poster} alt={movie?.Title} className="w-full h-[300px] sm:h-[400px] sm:w-[500px] object-cover rounded-md" />

                    <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2 sm:flex-row flex-col sm:items-center">
                            <div className="space-y-2">
                                <h1 className="text-2xl font-bold">{movie?.Title}</h1>
                                <p className="text-slate-500">{movie?.Released} | {movie?.Runtime} | {movie?.Rated}</p>
                            </div>
                            <p className="flex items-center justify-center gap-2">{movie?.imdbRating} <FaStar className="text-yellow-500" /></p>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold">Overview</h1>
                            <p>{movie?.Plot}</p>
                        </div>
                        <div className="flex items-center justify-start gap-5">
                            <div className="space-y-2">
                                <p className="text-slate-500">Starring</p>
                                <p className="text-slate-500">Created by</p>
                                <p className="text-slate-500">Genre</p>
                            </div>
                            <div className="space-y-2">
                                <p>{movie?.Actors}</p>
                                <p>{movie?.Writer}</p>
                                <p>{movie?.Genre}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-start gap-3">
                            <Link to='/' className="py-2 px-4 rounded-md bg-red-500 border border-red-500">Go back</Link>
                            <Link to={`https://www.imdb.com/title/${id}`} className="py-2 px-4 rounded-md hover:bg-red-500 border border-red-500">View on IMDB</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MovieDetails;