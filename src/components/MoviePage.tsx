import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import {Movie,ApiResponseGetMovie} from "../types"

export default function MoviePage() {
    const {id}:{id: string} = useParams();
    const [movieData, setMovieData] = useState<ApiResponseGetMovie|null>(null)
    const [error, setError] = useState<string|null>(null)

    async function getMovie(){
        const url = `http://www.omdbapi.com/?i=${id}&apikey=91545615`
        const response = await fetch(url)
        if(response.status === 200){
            const data = await response.json() as ApiResponseGetMovie;
            setMovieData(data)
        }else{
            // handle network error
            setError("network error")
        }
    }


    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            <div>
                <img height="300" src={movieData?.Poster}></img>
                <div>
                    <h2>{movieData?.Title} - {movieData?.Year} </h2>
                    <h4>{movieData?.Title}</h4>
                    <h4>Rating: {movieData?.imdbRating}</h4>
                    <p>{movieData?.Plot}</p>
                </div>
            </div>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}
