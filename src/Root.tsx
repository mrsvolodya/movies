import React from "react";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { Route, Routes } from "react-router-dom";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.tsx";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage.tsx";

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<DetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
