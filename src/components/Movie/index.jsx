import React from "react";
import './style.css';
import { useParams, } from "react-router-dom";

const Movie = ({ movies }) => {
    const { movieId } = useParams()
    const movieData = movies.find((movie) =>
        movie.id === Number(movieId));

    return (
        <div className="movie">
            <img src={movieData.poster} alt={movieData.title} />

            <h2>{movieData.title}</h2>

            <p>Director: {movieData.director}</p>

            <span>Year: {movieData.year}</span>
            <span className="movie-rating">Rating: {movieData.rating}</span>

            <p>{movieData.storyline}</p>

        </div>
    )
}

export default Movie;