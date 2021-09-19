import React from 'react'
import { Movie } from '../types'
import MovieCard from './MovieCard'
import styled from "styled-components"

interface MovieListProps{
    movieList: Movie[]
}

export default function MovieList({movieList}:MovieListProps) {
    return (
        <MovieListContainer>
            {movieList.map((movie:Movie) => {
                return <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
            })}
        </MovieListContainer>
    )
}

const MovieListContainer = styled.div`
    margin-bottom: 4rem;
`