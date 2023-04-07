import React from "react";
import './style.css';
import { Link } from "react-router-dom";



const MovieList = ({ movies, handler }) => {

    console.log(movies.map((movie) => { return (movie) }));
    return (

        < div className="movie-list">
            {movies.map((film) => { return (<Link onClick={handler} key={film.id} to={film.id}>{film.title}</Link >) })}
        </div >
    )
}

export default MovieList;