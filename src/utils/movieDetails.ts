import { Movie } from "../types/Movie";

export function getMovieDetails(movie: Movie) {
  return [
    { label: "Actors", value: movie.actors.join(", ") },
    { label: "Director", value: movie.director },
    { label: "Genre", value: movie.genre },
    { label: "Release date", value: movie.releaseDate },
    { label: "Rating", value: movie.rating },
  ];
}
