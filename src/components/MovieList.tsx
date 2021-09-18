import React from 'react'
import { Movie } from '../types'
import MovieCard from './MovieCard'

interface MovieListProps{
    movieList: Movie[]
}

export default function MovieList({movieList}:MovieListProps) {
    return (
        <div>
            {movieList.map((movie:Movie) => {
                return <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
            })}
        </div>
    )
}
