const apiKey = "91545615";

export function buildListUrl(searchText:string, currentPage:number):string{
    return `https://www.omdbapi.com/?s=${searchText}&apikey=${apiKey}&page=${currentPage}`
}

export function buildMovieUrl(id:string):string{
    return `https://www.omdbapi.com/?i=${id}&apikey=91545615`
}