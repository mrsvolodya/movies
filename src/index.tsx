import "./globals.css";
import React from "react";
import { Root } from "./Root.tsx";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { MovieProvider } from "./store/MovieProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <Root />
      </MovieProvider>
    </QueryClientProvider>
  </Router>
);
