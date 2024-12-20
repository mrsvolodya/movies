import axios from "axios";
import { Movie } from "../types/Movie";

const BASE_URL = "https://movies-backend-qzuk.onrender.com/movies";

export async function fetchMovies() {
  const url = BASE_URL;
  const { data } = await axios.get<Movie[]>(url);

  return data;
}

export async function fetchMovie(id: string) {
  const url = `${BASE_URL}/${id}`;
  const { data } = await axios.get<Movie>(url);
  return data;
}

export async function deleteMovie(id: string) {
  await axios.delete(`${BASE_URL}/${id}`);
}

export async function postMovie(newMovie: Omit<Movie, "id">) {
  return axios.post<Movie>(BASE_URL, newMovie);
}

export async function updateMovie(updatedMovie: Movie) {
  return axios.put(`${BASE_URL}/${updatedMovie.id}`, updatedMovie);
}
