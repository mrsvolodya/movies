import { Movie } from "./Movie";

export type StoreType = {
  favoritesMovies: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isInFavorites: (movies: Movie[], idMovie: number) => boolean;
  deleteFromFavorites: (id: number) => void;
};
