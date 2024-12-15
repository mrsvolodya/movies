import React, { useContext } from "react";
import { Movie } from "../../types/Movie";
import { Button } from "../UI/Button.tsx";
import { HeartIcon } from "../UI/HeartIcon.tsx";
import { MovieStore } from "../../store/MovieProvider.tsx";

type DetailProps = {
  movie: Movie;
};

export function MovieDetails({ movie }: DetailProps) {
  const { favoritesMovies, toggleFavorite, isInFavorites } =
    useContext(MovieStore);
  const isFavorites = isInFavorites(favoritesMovies, movie.id);
  return (
    <div>
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold drop-shadow-lg">{movie.title}</h1>
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <Button
              onClick={() => toggleFavorite(movie)}
              extraClass="bg-gray-600 hover:scale-100"
            >
              <HeartIcon isFilled={isFavorites} />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent  p-8 rounded-lg  mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Description</h2>
            <p className="text-gray-300 text-lg">{movie.description}</p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xl font-semibold">Actors</p>
              <p>{movie.actors.join(",")}</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Director</p>
              <p>{movie.director}</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Genre</p>
              <p>{movie.genre}</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Release date</p>
              <p>{movie.releaseDate}</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Rating</p>
              <p className="text-yellow-400 text-lg">{movie.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
