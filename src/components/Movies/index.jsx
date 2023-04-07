import React from "react";
import { Outlet } from "react-router-dom";
import MovieList from "../MovieList";
import './style.css';



const Movies = ({ movies }) => {

    return (
        <>
            <h1>Movies</h1>
            <div className="movies-container">
                <MovieList movies={movies} />
                <Outlet />
            </div>
        </>
    )
}



export default Movies;