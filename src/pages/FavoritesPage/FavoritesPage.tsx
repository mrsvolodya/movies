import React from "react";
import { useContext } from "react";
import { MovieStore } from "../../store/MovieProvider.tsx";
import { NotFound } from "../../components/common/NotFound.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { MoviesList } from "../../components/MovieList/MoviesList.tsx";

export function FavoritesPage() {
  const { favoritesMovies } = useContext(MovieStore);

  return (
    <div className="bg-mainBack min-h-screen h-64 overflow-y-auto custom-scrollbar">
      <Header />
      <div>
        {favoritesMovies.length === 0 ? (
          <NotFound name="Favorites " />
        ) : (
          <MoviesList favoritesMovies={favoritesMovies} />
        )}
      </div>
    </div>
  );
}
