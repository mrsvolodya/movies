import { MouseEventHandler } from "react";
import { Movie } from "./Movie";

export type StoreType = {
  isEditMovie: Movie | null;
  isFormOpen: boolean;
  closeForm: () => void;
  favoritesMovies: Movie[];
  setIsFormOpen: (v: boolean) => void;
  toggleFavorite: (movie: Movie) => void;
  deleteFromFavorites: (id: number) => void;
  handleToEdit: (value: Movie | null) => void;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
  isInFavorites: (movies: Movie[], idMovie: number) => boolean;
};
