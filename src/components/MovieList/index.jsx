import React from "react";
import './style.css';
import { Link } from "react-router-dom";



const MovieList = ({ movies }) => {
    return (

        < div className="movie-list">
            {movies?.map((movie) => {
                return (<Link key={movie.id} to={`${movie.id}`} >{movie.title}</Link>)
            })}
        </div >
    )
}
/* DOTAZ:
proč zápis: <Link key={movie.id} to={movie.id} >{movie.title}</Link> nefunguje?


*/


export default MovieList;