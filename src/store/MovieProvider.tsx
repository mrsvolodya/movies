import React, { createContext, useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { useLocation } from "react-router-dom";
import { StoreType } from "../types/StoreType.ts";
import { LocalStorageKeys } from "../enums/LocalStorageKeys.ts";

export const MovieStore = createContext<StoreType>({
  isEditMovie: null,
  isFormOpen: false,
  favoritesMovies: [],
  closeForm: () => {},
  toggleMenu: () => {},
  handleToEdit: () => {},
  setIsFormOpen: () => {},
  toggleFavorite: () => {},
  isInFavorites: () => null,
  deleteFromFavorites: () => {},
  updateFavFromEditMovie: () => {},
});

export function MovieProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditMovie, setIsEditMovie] = useState<Movie | null>(null);
  const [favoritesMovies, setFavoritesMovies] = useState<Movie[]>([]);

  const { pathname } = useLocation();

  useEffect(() => {
    try {
      const data = localStorage.getItem(LocalStorageKeys.FAVORITES);
      if (data) {
        const parseData = JSON.parse(data);
        setFavoritesMovies(parseData);
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
    }
  }, []);

  useEffect(() => {
    closeForm();
  }, [pathname, setIsFormOpen]);

  function closeForm() {
    setIsFormOpen(false);
    setIsEditMovie(null);
  }

  function toggleMenu() {
    setIsEditMovie(null);
    setIsFormOpen(!isFormOpen);
  }

  function addToLocalStorage<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function handleToEdit(movie: Movie | null) {
    setIsFormOpen(true);
    setIsEditMovie(movie);
  }

  function isInFavorites(movies: Movie[], idMovie: string) {
    return movies.find((mov) => mov.id === idMovie) || null;
  }

  function updateFavorites(updater: (movies: Movie[]) => Movie[]) {
    setFavoritesMovies((prevFavorites) => {
      const updatedFavorites = updater(prevFavorites);
      addToLocalStorage(LocalStorageKeys.FAVORITES, updatedFavorites);
      return updatedFavorites;
    });
  }

  function deleteFromFavorites(id: string) {
    updateFavorites((movies) => movies.filter((mov) => mov.id !== id));
  }

  function updateFavFromEditMovie(updatedMovie: Movie) {
    updateFavorites((movies) =>
      movies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
  }

  function toggleFavorite(movie: Movie) {
    updateFavorites((movies) =>
      isInFavorites(movies, movie.id)
        ? movies.filter((mov) => mov.id !== movie.id)
        : [...movies, movie]
    );
  }

  return (
    <MovieStore.Provider
      value={{
        closeForm,
        isFormOpen,
        toggleMenu,
        isEditMovie,
        handleToEdit,
        setIsFormOpen,
        isInFavorites,
        toggleFavorite,
        favoritesMovies,
        deleteFromFavorites,
        updateFavFromEditMovie,
      }}
    >
      {children}
    </MovieStore.Provider>
  );
}
