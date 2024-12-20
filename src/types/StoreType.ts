import { MouseEventHandler } from "react";
import { Movie } from "./Movie";

export type StoreType = {
  isEditMovie: Movie | null;
  isFormOpen: boolean;
  closeForm: () => void;
  favoritesMovies: Movie[];
  setIsFormOpen: (v: boolean) => void;
  toggleFavorite: (movie: Movie) => void;
  deleteFromFavorites: (id: string) => void;
  handleToEdit: (value: Movie | null) => void;
  updateFavFromEditMovie: (movie: Movie) => void;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
  isInFavorites: (movies: Movie[], idMovie: string) => Movie | null;
};
