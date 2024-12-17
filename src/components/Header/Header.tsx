import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { SideMenu } from "../SideMenu/SideMenu.tsx";
import { HeaderNav } from "../HeaderNav/HeaderNav.tsx";
import { MovieStore } from "../../store/MovieProvider.tsx";
import { MovieSearchInput } from "../MovieSearchInput/MovieSearchInput.tsx";

export function Header() {
  const { favoritesMovies, isFormOpen, toggleMenu, isEditMovie } =
    useContext(MovieStore);

  const { id } = useParams();

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
        <div className="container flex-wrap mx-auto px-4 py-2 flex items-center justify-between md:p-3">
          <div className="sm:text-3xl font-bold tracking-wide">
            <NavLink
              to="/"
              className="flex items-center gap-1 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-yellow-400">Movie</span>
              <span className="text-white">DB</span>
            </NavLink>
          </div>

          <div className="order-1 w-full lg:-order-none sm:-order-none sm:max-w-fit ">
            {!id && <MovieSearchInput />}
          </div>

          <HeaderNav
            favoritesCount={favoritesMovies.length}
            toggleMenu={toggleMenu}
            isFormOpen={isFormOpen}
          />
        </div>
      </header>
      <SideMenu isFormOpen={isFormOpen} movieToEdit={isEditMovie} />
    </>
  );
}
