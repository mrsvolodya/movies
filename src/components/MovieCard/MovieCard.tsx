import React, { useState } from "react";
import { Movie } from "../../types/Movie.ts";
import { HeartIcon } from "../UI/HeartIcon.tsx";
import { Button } from "../Button.tsx";
import { EditIcon } from "../UI/EditIcon.tsx";
import { DeleteIcon } from "../UI/DeleteIcon.tsx";
import { CloseIcon } from "../UI/CloseIcon.tsx";

interface MovieProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      key={movie.id}
      className="relative overflow-hidden group rounded-lg border-transparent transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
    >
      <img
        key={movie.image}
        src={movie.image}
        alt={`Poster of ${movie.title}`}
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
      <div className="p-4">
        <h4 className="text-xl font-semibold text-white">{movie.title}</h4>
        <p className="text-sm text-gray-300 mt-1">{movie.releaseDate}</p>
        <p className="text-sm text-yellow-400 mt-1">{movie.rating}</p>
      </div>

      <div className="absolute bottom-0 left-25% right-0 bg-black p-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        <div className="justify-around gap-4">
          <div>
            <Button
              onClick={handleFavoriteClick}
              extraClass="bg-red-600 hover:bg-red-700"
            >
              <HeartIcon isFilled={isFavorited} />
            </Button>
            <Button
              onClick={handleFavoriteClick}
              extraClass="bg-gray-800 hover:bg-gray-700"
            >
              <EditIcon isFilled={isFavorited} />
            </Button>
          </div>
          <div>
            <Button
              onClick={handleFavoriteClick}
              extraClass="bg-gray-800 hover:bg-gray-700"
            >
              <DeleteIcon isFilled={isFavorited} />
            </Button>
            <Button
              onClick={handleFavoriteClick}
              extraClass="bg-gray-800 hover:bg-gray-700"
            >
              <CloseIcon isFilled={isFavorited} />
            </Button>
          </div>
          {/* 
          <div>
            <button className="px-1 py-1 w-[25%] bg-blue-500 text-white rounded-full text-sm font-semibold transition-colors hover:bg-blue-600">
              Details
            </button> */}
        </div>
      </div>
    </div>
  );
}
