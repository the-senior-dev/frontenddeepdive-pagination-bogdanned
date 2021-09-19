import React from 'react'
import {
    Link
  } from "react-router-dom";
import {Movie} from "../types"
import styled from "styled-components"

interface MovieCardProps{
    movie: Movie
}


export default function MovieCard({movie}:MovieCardProps) {
    return (
        <MovieLink to={`/movie/${movie.imdbID}`} >
            <MovieCardContainer style={{display: "flex"}}>
                <MovieImage src={movie.Poster}/>
                <MovieContent>
                    <MovieTitle>{movie.Title} - {movie.Year} </MovieTitle>
                    <MovieGenre>{movie.Type}</MovieGenre>
                </MovieContent>
            </MovieCardContainer>
        </MovieLink>

    )
}

const MovieLink = styled(Link)`
    text-decoration: none;
`

const MovieTitle = styled.h2`
    font-size: 1.2rem;
    text-decoration: none;
    color: #2c3e50;
`

const MovieGenre= styled.p`
    font-size: 14px;
    text-transform: capitalize;
    text-decoration: none;
    color: #2c3e50;
    font-weight: 200;
    margin-top: 5px;
    color: #7f8c8d;
`

const MovieImage = styled.img`
    height: 130px;
    width: 83px;
    overflow: hidden;
`

const MovieCardContainer = styled.div`
    margin-top: 4px;
    border: solid grey 1px;
    border-color: #ecf0f1;
    :hover{
        background-color: #ecf0f1;
    }
`

const MovieContent = styled.div`
    padding-left: 10px;
`

