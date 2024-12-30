import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Pathnames } from "../../enums/Pathnames.ts";
import { AddIcon } from "../Common/AddIcon.tsx";
import { HeartIcon } from "../Common/HeartIcon.tsx";

export function HeaderNav({ favoritesCount, toggleMenu, isFormOpen }) {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="flex text-center justify-center items-center">
        <li>
          <NavLink to="/favorites">
            <div className="relative">
              <HeartIcon
                size={20}
                isActive={pathname === Pathnames.FAVORITES}
                color="white"
                isHeader
              />
              {favoritesCount > 0 && (
                <span className="absolute flex items-center justify-center top-0 right-0 text-xs bg-red-600 rounded-full w-4 h-4">
                  {favoritesCount}
                </span>
              )}
            </div>
          </NavLink>
        </li>
        <li>
          <button
            onClick={toggleMenu}
            className="flex focus:outline-none"
            aria-label="Add a new movie"
          >
            <AddIcon size={20} isActive={isFormOpen} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
