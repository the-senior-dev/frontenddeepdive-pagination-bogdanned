declare module "*.css" {
  const url: string;
  export default url;
}

declare enum ResponseStatus {
  "True" = "True",
  "False" = "False",
}

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type MovieRating = {
  Source: string;
  Value: string;
};

type ApiResponseGetMovie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

type ApiResponse = {
  Search: Movie[];
  totalResults: string;
  Response: ResponseStatus.True;
};

type ApiResponseNotFound = {
  Response: ResponseStatus.False;
  Error: string;
};

// union type for the api response
type FullApiResponse = ApiResponse | ApiResponseNotFound;
