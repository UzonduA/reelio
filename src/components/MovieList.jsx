import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, onCardClick }) {
  const handleCardClick = onCardClick || (() => {});

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => handleCardClick(movie)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleCardClick(movie);
          }}
        >
          <MovieCard movie={movie} onClick={onCardClick} />
        </div>
      ))}
    </div>
  );
}

