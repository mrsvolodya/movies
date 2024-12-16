import React from "react";
import { Header } from "../../components/Header/Header.tsx";
import { MoviesList } from "../../components/MovieList/MoviesList.tsx";

export function HomePage() {
  return (
    <div className="bg-mainBack min-h-screen h-64 overflow-x-hidden custom-scrollbar">
      <Header />
      <main>
        <MoviesList />
      </main>
    </div>
  );
}
