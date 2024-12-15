import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "../../types/FormValues.ts";
import { useMovieMutation } from "../../hooks/useMovieMutation.ts";
import { Loader } from "../UI/Loader.tsx";
import { ErrorMessage } from "../UI/ErrorMessage.tsx";
import { Movie } from "../../types/Movie.ts";
import fieldsData from "../../data/formFields.json";
import { FormField } from "../../types/FormField.ts";
type FormProps = {
  movieToEdit?: Movie | null;
};

const defaultValues = {
  title: "",
  image: "",
  rating: 0,
  releaseDate: "",
  description: "",
  actors: "",
  director: "",
  genre: "",
};

export function Form({ movieToEdit }: FormProps) {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { movieMutation, isLoading, isError } = useMovieMutation();

  useEffect(() => {
    if (movieToEdit) {
      reset({
        title: movieToEdit.title,
        image: movieToEdit.image,
        rating: movieToEdit.rating,
        releaseDate: movieToEdit.releaseDate,
        description: movieToEdit.description,
        actors: movieToEdit.actors.join(","),
        director: movieToEdit.director,
        genre: movieToEdit.genre,
      });
    }
  }, [movieToEdit, reset]);

  function onSubmit(data: FormValues) {
    const actorsArray = data.actors.split(",");
    const updateNewMovie = { ...data, actors: actorsArray };

    movieMutation.mutate(
      movieToEdit ? { ...updateNewMovie, id: movieToEdit.id } : updateNewMovie
    );
    reset(defaultValues);
  }

  const baseLabel = "block mb-1 text-sm";
  const baseInput = "w-full px-4 bg-gray-800 rounded";

  const fields = fieldsData as FormField[];

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={"Please try again."} />}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className={baseLabel}>
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              step={field.step}
              min={field.min}
              max={field.max}
              className={baseInput}
              placeholder={field.placeholder}
              {...register(field.id as keyof FormValues, {
                required: field.required,
              })}
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-gray-800 hover:bg-slate-600 font-bold px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
