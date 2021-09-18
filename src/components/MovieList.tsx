import React from 'react'
import MovieCard from './MovieCard'
import {Movie} from "./types"
 
interface MovieProps{
    movieList: Movie[]
}

export default function MovieList({movieList}:MovieProps) {
    return (
        <div>
            {movieList.map(movie => {
                return <MovieCard movie={movie}/>
            })}
        </div>
    )
}
