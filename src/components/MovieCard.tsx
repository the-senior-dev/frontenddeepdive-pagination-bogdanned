import React from 'react'
import {
    Link
} from "react-router-dom";

import {Movie} from "./types"
 
interface MovieCardProps{
    movie: Movie
}

export default function MovieCard({movie}:MovieCardProps) {
    return (
        <Link to={`/movie/${movie.imdbID}`}>
            <div style={{display: "flex"}}>
                <img height="200" src={movie.Poster}></img>
                <div>
                    <h4>{movie.Title}</h4>

                    <p>
                     {movie.Year}
                    </p>
                </div>
            </div>
        </Link>
    )
}
