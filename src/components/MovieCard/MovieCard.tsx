import React, { useContext } from "react";
import { Movie } from "../../types/Movie.ts";
import { HeartIcon } from "../UI/HeartIcon.tsx";
import { Button } from "../UI/Button.tsx";
import { EditIcon } from "../UI/EditIcon.tsx";
import { DeleteIcon } from "../UI/DeleteIcon.tsx";
import { Link } from "react-router-dom";
import { MovieStore } from "../../store/MovieProvider.tsx";
import { useDelete } from "../../hooks/useDelete.ts";
import { Loader } from "../UI/Loader.tsx";

interface MovieProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieProps) {
  const { favoritesMovies, toggleFavorite, isInFavorites } =
    useContext(MovieStore);

  const { mutation, isLoading } = useDelete(movie.id);
  const isFavorites = isInFavorites(favoritesMovies, movie.id);

  return (
    <div className="group relative overflow-hidden rounded-lg border-transparent transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <Loader />
        </div>
      )}
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
          <Button onClick={() => {}}>
            <EditIcon />
          </Button>
          <Button onClick={() => mutation.mutate()} disabled={isLoading}>
            <DeleteIcon />
          </Button>
          {/* <Button
            onClick={handleFavoriteClick}
            extraClass="bg-gray-800 hover:bg-gray-700"
          >
            <CloseIcon isFilled={isFavorited} />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
