import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import {ApiResponseGetMovie} from "../types"
import styled from "styled-components"

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
        <MainContainer>
            <Content>
                <div>
                    <img height="300" src={movieData?.Poster}></img>
                    <div>
                        <h2>{movieData?.Title} - {movieData?.Year} </h2>
                        <h4>Rating: {movieData?.imdbRating}</h4>
                        <p>Director: {movieData?.Director}</p>
                        <p>Votes: {movieData?.imdbVotes}</p>

                        <p>{movieData?.Plot}</p>

                    </div>
                </div>
                <Link to="/">
                    <BackButton>Go Back</BackButton>
                </Link>
            </Content>

        </MainContainer>
    )
}


const Content = styled.div`
  max-width: 840px;
  margin-top: 4rem;
  width: 100%;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`


const BackButton = styled.button`
    box-sizing: content-box;
    display: inline-block;
    border-width: 0px;
    border-color: #34ace0;
    height: 30px;  
    border-radius: 1px;
    margin: 0rem 1rem;
    background: #34ace0;
    color: white;
    margin-left: 4px;
    margin-right: 4px;
    font-weight: 100;
    :hover{
        background: #227093;
        cursor: pointer;
    }
    :disabled {
        background: #dddddd;
        cursor: not-allowed    
    }
`