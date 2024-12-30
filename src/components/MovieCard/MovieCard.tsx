import React, { useContext } from "react";
import { Movie } from "../../types/Movie.ts";
import { HeartIcon } from "../Common/HeartIcon.tsx";
import { Button } from "../Common/Button.tsx";
import { EditIcon } from "../Common/EditIcon.tsx";
import { DeleteIcon } from "../Common/DeleteIcon.tsx";
import { Link } from "react-router-dom";
import { MovieStore } from "../../store/MovieProvider.tsx";
import { useDeleteMovieMutation } from "../../hooks/useDeleteMovieMutation.ts";
import { Loader } from "../Common/Loader.tsx";
import { ErrorMessage } from "../Common/ErrorMessage.tsx";

interface MovieProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieProps) {
  const { favoritesMovies, toggleFavorite, isInFavorites, handleToEdit } =
    useContext(MovieStore);

  const { mutation, isLoading, isError } = useDeleteMovieMutation(movie.id);

  function handleDelete() {
    mutation.mutate();
  }

  const isFavorites = isInFavorites(favoritesMovies, movie.id);

  return (
    <div className="group relative overflow-hidden rounded-lg border-transparent transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={"Please try again."} />}
      <Link to={`/${movie.id}`}>
        <img
          key={movie.image}
          src={movie.image}
          alt={`Poster of ${movie.title}`}
          className="w-full h-72 object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
        <div className="p-4">
          <h4 className="text-xl font-semibold text-white">{movie.title}</h4>
          <p className="text-sm text-gray-300 mt-1">{movie.releaseDate}</p>
          <p className="text-sm text-yellow-400 mt-1">{movie.rating}</p>
        </div>
      </Link>
      <div className="absolute bottom-0 left-25% right-0 p-2 opacity-100 lg:opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        <div className="flex gap-4">
          <Button onClick={() => toggleFavorite(movie)}>
            <HeartIcon isFilled={isFavorites} />
          </Button>
          <Button onClick={() => handleToEdit(movie)}>
            <EditIcon />
          </Button>
          <Button onClick={handleDelete} disabled={isLoading}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
