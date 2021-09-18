import React, { useState, useEffect } from 'react'
import MovieList from './MovieList'
import Pagination from './Pagination'
import {ApiResponse, Movie} from "./types"

const apiUrl = ""

export default function MainPage() {
    const [movieList, setMovieList] = useState<Movie[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageTotal, setPageTotal] = useState(1)
    const [searchText, setSearchText] = useState("Star Wars")

    async function getMovies(){
        const response = await fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=91545615&page=${currentPage}`);
        const data:ApiResponse = await response.json();
        setMovieList(data.Search)
        const pageTotal = Math.ceil(parseInt(data.totalResults) / 10)
        setPageTotal(pageTotal)
    }

    useEffect(() => {
        async function getWrapper(){
            await getMovies();
        }
        getWrapper();
    }, [currentPage])

    return (
        <div>
            <div>
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                <button>search</button>
            </div>
            <MovieList movieList={movieList}></MovieList>
            <Pagination setCurrentPage={setCurrentPage} pageTotal={pageTotal} currentPage={currentPage}></Pagination>
        </div>
    )
}
