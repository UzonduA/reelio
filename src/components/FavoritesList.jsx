import React from "react";
import MovieCard from "./MovieCard";

export default function FavoritesList({ favorites, onCardClick, onFavorite }) {
  if (!favorites.length) {
    return <p className="text-center text-gray-400 mt-6">No favorite movies yet.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onCardClick(movie)}
          onFavorite={() => toggleFavorite(movie)}
          isFavorite={true}
        />
      ))}
    </div>
  );
}
