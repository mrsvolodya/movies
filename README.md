# Movie Database Web Application

## Description

This project is a **Movie Database Web Application** built using **React** and **TypeScript**. It provides a simple and intuitive interface for users to manage their movie collection. Key features include:

- **Movie Listing**: Displays movies with essential details such as title, image, rating, and release date.
- **Movie Details**: Provides a detailed page for each movie, including description, actors, director, genre, and rating.
- **Search Functionality**: Search for movies by title with a **debounced input** for optimal performance.
- **CRUD Operations**: Add, edit, and delete movies from your collection.
- **Favorites**: Mark movies as favorites to easily track them.
- **Responsive Design**: The app is fully responsive, making it accessible across various devices.
- **Hover Effects**: Interactive hover effects to enhance the user experience.
- **SVG Icons**: Custom SVG icons for consistent and modern UI design.
- **Data Management**: Uses **Tanstack Query** for data fetching and caching.
- **State Management**: Global state management with **Context API**.
- **Routing**: Smooth navigation using **React Router DOM**.

## Create Backend API for Movie DB

- **The backend is built using Node.js with Express and provides a RESTful API for managing movie data. It supports the following endpoints:**

- **GET** /movies - Fetch all movies or /movies/:id - Fetch details of a specific movie.
- **POST** /movies - Add a new movie.
- **PATCH** /movies/:id - Update an existing movie.
- **DELETE** /movies/:id - Delete a movie.
- **I developed the backend part of this application entirely on my own using Node.js and Express. I used Render's dashboard for deployment to make the backend accessible online and ensure smooth integration with the frontend.**

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Adds type safety for better development experience.
- **React Router DOM**: For navigation and routing.
- **Tailwind CSS**: A utility-first CSS framework for responsive design.
- **Tanstack Query**: Data fetching and state management tool.
- **React Hook Form**: Simplifies form handling.
- **Context API**: For global state management.
- **SVG Icons**: Custom icons for consistent UI design.
- **Axios**: For making HTTP requests to the backend.
- **ruseDebounce**: Optimizes search functionality by debouncing user input.
- **@headlessui/react**: Provides accessible UI components.

## INSTALLATION

git clone https://github.com/mrsvolodya/movies.git
npm install
npm start

Note: The backend for this application is hosted on the free version of Render's dashboard. While this ensures the backend is accessible online, free instances on Render can go into a "sleep mode" when inactive. As a result, the first request after a period of inactivity may take up to 50 seconds or more to respond. Subsequent requests will process without delays.

## You can view a live preview of the project here: https://mrsvolodya.github.io/movies/
