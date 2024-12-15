import React, { createContext, useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { useLocation } from "react-router-dom";
import { StoreType } from "../types/StoreType.ts";
import { LocalStorageKeys } from "../enums/LocalStorageKeys.ts";

export const MovieStore = createContext<StoreType>({
  isEditMovie: null,
  isFormOpen: false,
  favoritesMovies: [],
  toggleMenu: () => {},
  handleToEdit: () => {},
  setIsFormOpen: () => {},
  toggleFavorite: () => {},
  isInFavorites: () => false,
  deleteFromFavorites: () => {},
});

export function MovieProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditMovie, setIsEditMovie] = useState<Movie | null>(null);
  const [favoritesMovies, setFavoritesMovies] = useState<Movie[]>([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const data = localStorage.getItem(LocalStorageKeys.FAVORITES);
    if (data) {
      const parseData = JSON.parse(data);
      setFavoritesMovies(parseData);
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
    setIsEditMovie((prevState) => (prevState ? null : movie));
  }

  function isInFavorites(movies: Movie[], idMovie: number): boolean {
    return movies.some((mov) => mov.id === idMovie);
  }

  function deleteFromFavorites(id: number) {
    setFavoritesMovies((prevFavorites) => {
      const updateMovies = prevFavorites.filter((mov) => mov.id !== id);
      addToLocalStorage(LocalStorageKeys.FAVORITES, updateMovies);
      return updateMovies;
    });
  }

  function toggleFavorite(movie: Movie) {
    setFavoritesMovies((prevFavorites) => {
      const isFavorite = isInFavorites(prevFavorites, movie.id);
      if (isFavorite) {
        const updatedFavorites = prevFavorites.filter(
          (mov) => mov.id !== movie.id
        );
        addToLocalStorage(LocalStorageKeys.FAVORITES, updatedFavorites);
        return updatedFavorites;
      }
      const updatedFavorites = [...prevFavorites, movie];
      addToLocalStorage(LocalStorageKeys.FAVORITES, updatedFavorites);
      return updatedFavorites;
    });
  }

  return (
    <MovieStore.Provider
      value={{
        isFormOpen,
        toggleMenu,
        isEditMovie,
        handleToEdit,
        setIsFormOpen,
        isInFavorites,
        toggleFavorite,
        favoritesMovies,
        deleteFromFavorites,
      }}
    >
      {children}
    </MovieStore.Provider>
  );
}
