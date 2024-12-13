import React from "react";
import { useMovies } from "../../hooks/useMovies.ts";
import { MovieCard } from "../MovieCard/MovieCard.tsx";
import { Movie } from "../../types/Movie.ts";

export function MoviesList() {
  const { data: movies, isLoading, isError } = useMovies();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching Movies</div>;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5 w-full px-5">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
