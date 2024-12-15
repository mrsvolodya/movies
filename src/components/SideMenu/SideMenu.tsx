import React from "react";
import classNames from "classnames";
import { Form } from "../Form/Form.tsx";
import { Movie } from "../../types/Movie.ts";

type SideMenuProps = {
  isFormOpen: boolean;
  movieToEdit: Movie | null;
};

export function SideMenu({ isFormOpen, movieToEdit }: SideMenuProps) {
  return (
    <div
      className={classNames(
        "fixed z-20 h-full w-full bg-mainBack translate-x-full duration-300 opacity-90 ease-in-out overflow-y-auto",
        { "-translate-x-0": isFormOpen }
      )}
    >
      <div className="flex items-center flex-col justify-center w-full min-h-full z-50">
        <h2 className="text-yellow-400 text-2xl mb-2">
          {movieToEdit ? "Edit movie" : "Add New Movie"}
        </h2>
        <Form movieToEdit={movieToEdit} />
      </div>
    </div>
  );
}
