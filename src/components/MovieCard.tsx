import React from 'react'
import {
    Link
  } from "react-router-dom";
import {Movie} from "../types"

interface MovieCardProps{
    movie: Movie
}

export default function MovieCard({movie}:MovieCardProps) {
    return (
        <Link to={`/movie/${movie.imdbID}`}>
            <div style={{display: "flex"}}>
                <img height="100" src={movie.Poster}></img>
                <div>
                    <h1>{movie.Title} - {movie.Year} </h1>
                    <p>
                        {movie.Type}
                    </p>
                </div>
            </div>
        </Link>

    )
}
