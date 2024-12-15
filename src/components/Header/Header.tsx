import React, { useContext } from "react";
import { AddIcon } from "../UI/AddIcon.tsx";
import { HeartIcon } from "../UI/HeartIcon.tsx";
import { SideMenu } from "../SideMenu/SideMenu.tsx";
import { Pathnames } from "../../enums/Pathnames.ts";
import { NavLink, useLocation } from "react-router-dom";
import { MovieStore } from "../../store/MovieProvider.tsx";
import { MovieSearchInput } from "../MovieSearchInput/MovieSearchInput.tsx";

export function Header() {
  const { favoritesMovies, isFormOpen, toggleMenu, isEditMovie } =
    useContext(MovieStore);
  const { pathname } = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
        <div className="container flex-wrap mx-auto px-4 py-2 flex items-center justify-between md:p-3">
          <div className="sm:text-3xl font-bold tracking-wide">
            <NavLink to="/">
              <span className="text-yellow-400">Movie</span>DB
            </NavLink>
          </div>

          <div className="order-1 w-full lg:-order-none sm:-order-none sm:max-w-fit ">
            <MovieSearchInput />
          </div>

          <nav>
            <ul className="flex text-center justify-center items-center ">
              <li>
                <NavLink to="/favorites">
                  <div className="relative">
                    <HeartIcon
                      size={20}
                      isActive={pathname === Pathnames.FAVORITES}
                      color="white"
                      isHeader
                    />
                    {favoritesMovies.length > 0 && (
                      <span className="absolute flex items-center justify-center top-0 right-0 text-xs bg-red-600 rounded-full w-4 h-4">
                        {favoritesMovies.length}
                      </span>
                    )}
                  </div>
                </NavLink>
              </li>
              <li>
                <button
                  onClick={toggleMenu}
                  className="flex focus:outline-none"
                >
                  <AddIcon size={20} isActive={isFormOpen} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <SideMenu isFormOpen={isFormOpen} movieToEdit={isEditMovie} />
    </>
  );
}
