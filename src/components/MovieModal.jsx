import React from "react";

export default function MovieModal({ movie, onClose }) {
  if (!movie)
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 text-white">
        <p>Loading movie details...</p>
      </div>
    );

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
     
      <div
        className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row">
          <img
            src={posterUrl}
            alt={movie.title}
            className="w-full md:w-1/3 object-cover"
          />

          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>

            <p className="text-sm text-gray-400 mb-2">
              Release Year:{" "}
              {movie.release_date
                ? movie.release_date.split("-")[0]
                : "N/A"}
            </p>

            {movie.vote_average && (
              <p className="text-yellow-400 mb-2">
                ⭐ Rating: {movie.vote_average.toFixed(1)}
              </p>
            )}

            {movie.overview && (
              <p className="text-gray-300 leading-relaxed">
                {movie.overview}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
