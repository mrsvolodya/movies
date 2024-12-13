import React from "react";
import { MoviesList } from "./components/MovieList/MoviesList.tsx";

export function App() {
  return (
    <div className="bg-mainBack">
      <header></header>
      <main>
        <MoviesList />
      </main>
      <footer></footer>
    </div>
  );
}
