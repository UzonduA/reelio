import React, { useState, useEffect} from 'react'
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import './App.css'
import MovieList from "./components/MovieList";
import tmdb from "./utils/tmdb";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      setLoading(true);
      try {
        const res = await tmdb.get("/movie/popular", {
          params: { page: 1,},
      });

      console.log("Default movies fetched:", res.data.results.slice(0, 3));
      setMovies(res.data.results);
    } catch (err) {
      console.error(err);
      setError("Failed to load trending movies.");
    } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const res = await tmdb.get("/search/movie", {
        params: { query, include_adult: false, page: 1},
        
      });
      console.log("TMDB RESPONSE URL:", res.request?.responseURL || (res.config && res.config.baseURL + res.config.url));
      console.log("TMDB REQUEST PARAMS:", res.config?.params);
      console.log("TMDB sample results (first 3):", res.data?.results?.slice(0,3));

      setMovies(res.data.results);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (movie) => {
    console.log("APP received card click for:", movie.title, movie.id);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-white">Welcome to Reelio</h2>
        <SearchBar onSearch={handleSearch} />

        {loading && <p className="text-center mt-6">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-6">{error}</p>}

        {!loading && searched && movies.length === 0 && !error && (
          <p className="text-center text-gray-400 mt-6">No movies found. Try another search.</p>
        )}
      

      {!loading && <MovieList movies={movies} onCardClick={handleCardClick} />}

        
      </main>
    </div>
  );
}