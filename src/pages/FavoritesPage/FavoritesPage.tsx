import { useContext } from "react";
import { MovieStore } from "../../store/MovieProvider.tsx";
import { MoviesList } from "../../components/MovieList/MoviesList.tsx";
import React from "react";
import { NotFound } from "../../components/UI/NotFound.tsx";
import { Header } from "../../components/Header/Header.tsx";

export function FavoritesPage() {
  const { favoritesMovies } = useContext(MovieStore);
  return (
    <div className="bg-mainBack min-h-screen flex flex-col  h-64 overflow-y-auto custom-scrollbar">
      <Header />
      {favoritesMovies.length === 0 ? (
        <NotFound name="Favorites " />
      ) : (
        <MoviesList favoritesMovies={favoritesMovies} />
      )}
    </div>
  );
}
