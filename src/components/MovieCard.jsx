import React from "react";

export default function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-2">
      <img
        src={posterUrl}
        alt={movie.title}
        className="rounded-md w-full object-cover"
      />
      <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
      <p className="text-sm text-gray-600">
        {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
      </p>
    </div>
  );
}
