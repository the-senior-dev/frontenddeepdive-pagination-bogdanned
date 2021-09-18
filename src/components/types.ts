export type Movie = {
    Title: string,
    Year: string,
    Poster: string,
    imdbID: string,
}

export type ApiResponse = {
    Search: Movie[]
    totalResults: string,
    Response: string
}