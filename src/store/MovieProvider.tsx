import React, { createContext, useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { LocalStorageKeys } from "../enums/LocalStorageKeys.ts";
import { StoreType } from "../types/StoreType.ts";

export const MovieStore = createContext<StoreType>({
  favoritesMovies: [],
  toggleFavorite: () => {},
  isInFavorites: () => false,
  deleteFromFavorites: () => {},
});

export function MovieProvider({ children }) {
  const [favoritesMovies, setFavoritesMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(LocalStorageKeys.FAVORITES);
    if (data) {
      const parseData = JSON.parse(data);
      setFavoritesMovies(parseData);
    }
  }, []);

  function addToLocalStorage<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
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
        favoritesMovies,
        toggleFavorite,
        isInFavorites,
        deleteFromFavorites,
      }}
    >
      {children}
    </MovieStore.Provider>
  );
}
