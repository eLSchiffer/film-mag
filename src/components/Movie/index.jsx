import React from "react";
import './style.css';
import { useParams, } from "react-router-dom";

const Movie = ({ movies }) => {
    const { movieId } = useParams()
    const movieData = movies.find((movie) =>
        movie.id === Number(movieId));
    console.log('id', movieId, movieData);
    return (
        <div className="movie">
            <img src={movieData.poster} alt={movieData.title} />

            <h2>{movieData.title}</h2>

            <p>{movieData.storyline}</p>

        </div>
    )
}

export default Movie;