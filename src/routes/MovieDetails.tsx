import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();

    return (
        <div>Details of movie with id of {id}</div>
    );
}

export default MovieDetails;