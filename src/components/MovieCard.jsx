import React from "react";

export default function MovieCard({ movie, onClick, onFavorite, isFavorite }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  const year = movie.release_date
    ? movie.release_date.split("-")[0]
    : movie.first_air_date
    ? movie.first_air_date.split("-")[0]
    : "N/A";

  const handleActivate = () => {
    if (typeof onClick === "function") {
      onClick(movie);
    } else {
      console.log("CARD CLICKED (debug):", movie.title);
    }
  };
    
  return (
    <div
        role="button"
        tabIndex={0}
        onClick={handleActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleActivate();
          }
        }}
        className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition transform hover:translate-y-1 cursor-pointer overflow-hidden flex flex-col">
        
        <div className="w-full h-64 sm:h-72 md:h-56 lg:h-64 overflow-hidden"> 
          <img
            src={posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover block"
            draggable={false}
          />
        </div>
        <div className="p-3 flex-1 flex flex-col">
            <h3 className="mt-2 text-lg font-semibold text-white truncate">
              {movie.title}
            </h3>
            <p className="text-sm text-gray-400">{year}</p>

            {movie.overview && (
              <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                {movie.overview}
              </p>
            )}

            {movie.vote_average && (
              <p className="text-yellow-400 text-sm mt-1">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>
            )}
            <button
              onClick={(e) => {
                 e.stopPropagation();
                 onFavorite(movie);
                }}
                className="mt-2 text-red-500 hover:text-red-400 transition"
              >
               ❤️ {isFavorite ? "Remove" : "Add"}
            </button>
        </div>
    </div>
  );
}
