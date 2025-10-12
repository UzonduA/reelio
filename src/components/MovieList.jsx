import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, onCardClick, favorites = [], toggleFavorite = () => {} }) {
  const handleCardClick = onCardClick || (() => {});

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => handleCardClick(movie)}
            onFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.id === movie.id)}
          />
      ))}
    </div>
  );
}

