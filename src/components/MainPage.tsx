import React, {useState, useEffect} from 'react'
import styled,{css} from "styled-components"

import { Movie,FullApiResponse,ResponseStatus } from '../types'
import MovieList from './MovieList'
import Pagination from './Pagination'
import {buildUrl} from "../utils/api"

export default function MainPage() {
    const [movieList, setMovieList] = useState<Movie[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageTotal, setPageTotal] = useState(1)
    const [searchText, setSearchText] = useState("Star Wars")
    const [error, setError] = useState("");


    async function getMovies(){
        const url = buildUrl(searchText, currentPage)
        const response = await fetch(url)
        
        if(response.status === 200){
            const data = await response.json() as FullApiResponse;
            if(data.Response === ResponseStatus.True ){
                setMovieList(data.Search)
                const pageTotalCalc = Math.ceil(parseInt(data.totalResults)/10);
                setPageTotal(pageTotalCalc)
            }else{
                setError(data.Error)
            }
        }else{
            // handle network error
            setError("network error")
        }

    }

    useEffect(() => {
       getMovies()
    }, [currentPage]) // when current page changes, on did mount

    return (
        <MainContainer>
            <div>
                <input placeholder="star wars" value={searchText} onChange={(event) => (setSearchText(event.target.value))}></input>
                <Button onClick={() => (getMovies())}>Search</Button>
            </div>
            <MovieList movieList={movieList}/>
            <Pagination pageTotal={pageTotal} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
        </MainContainer>
    )
}


const MainContainer = styled.div`
  /* This renders the buttons above... Edit me! */
  max-width: 960px;
`

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.2rem;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #34ace0;
  color: white;
  border: 2px solid white;
  :hover{
    background: #227093;
    cursor: pointer;
  }
`