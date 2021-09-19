const apiKey = "91545615";

export function buildUrl(searchText:string, currentPage:number):string{
    return `https://www.omdbapi.com/?s=${searchText}&apikey=${apiKey}&page=${currentPage}`
}