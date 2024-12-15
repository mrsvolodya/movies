import React from "react";
import { useForm } from "react-hook-form";
import { postMovie } from "../../api/movies.ts";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { QueryKeys } from "../../enums/QueryKeys.ts";

type FormValues = {
  title: string;
  image: string;
  rating: number;
  releaseDate: string;
  description: string;
  actors: string;
  director: string;
  genre: string;
};

export function Form() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: postMovie,
    onSuccess: () => {
      queryClient.invalidateQueries([
        QueryKeys.ALL_MOVIES,
      ] as InvalidateQueryFilters);
    },
    onError: (error) => {
      console.error("Error adding movie:", error);
    },
  });

  function onSubmit(data: FormValues) {
    const actorsArray = data.actors.split(",");
    const updateNewMovie = { ...data, actors: actorsArray };

    mutate(updateNewMovie);
    reset();
  }

  const baseLabel = "block mb-1 text-sm";
  const baseInput = "w-full px-4 bg-gray-800 rounded";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
      <div>
        <label htmlFor="title" className={baseLabel}>
          Movie Title
        </label>
        <input
          id="title"
          type="text"
          className={baseInput}
          placeholder="Enter the movie title, e.g., The Godfather"
          {...register("title", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="image" className={baseLabel}>
          Image URL
        </label>
        <input
          id="image"
          type="url"
          className={baseInput}
          placeholder="Paste the movie poster URL"
          {...register("image", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="rating" className={baseLabel}>
          Rating
        </label>
        <input
          id="rating"
          type="number"
          step="0.1"
          min="0"
          max="10"
          className={baseInput}
          placeholder="Enter a rating between 0 and 10"
          {...register("rating", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="releaseDate" className={baseLabel}>
          Release Date
        </label>
        <input
          id="releaseDate"
          type="date"
          className={baseInput}
          {...register("releaseDate", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="description" className={baseLabel}>
          Description
        </label>
        <input
          id="description"
          type="text"
          className={baseInput}
          placeholder="Write a short movie description"
          {...register("description", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="actors" className={baseLabel}>
          Actors
        </label>
        <input
          id="actors"
          type="text"
          className={baseInput}
          placeholder="Actors"
          {...register("actors", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="director" className={baseLabel}>
          Director
        </label>
        <input
          id="director"
          type="text"
          className={baseInput}
          placeholder="Enter the director's full name"
          {...register("director", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="genre" className={baseLabel}>
          Genre
        </label>
        <input
          id="genre"
          type="text"
          className={baseInput}
          placeholder="e.g., Action, Drama, Thriller"
          {...register("genre", { required: true })}
        />
      </div>
      <button
        type="submit"
        className="bg-gray-800  hover:bg-slate-600 font-bold px-4 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
}
