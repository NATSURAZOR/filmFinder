import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const result = (movies) => {
  try {
    return (
      <div className="movies">
        {movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            itemID={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            image={movie.Poster}
          />
        ))}
      </div>
    );
  } catch (err) {
    return (
      <div>
        <h1>Not Founded</h1>
      </div>
    );
  }
};

const Home = () => {
  const API_KEY = "dff14555";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const data = await response.json();
    setMovies(data.Search);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  console.log(movies);

  return (
    <div className="search">
      <h1>Find Your Movie</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          &#128269;
        </button>
      </form>
      {result(movies)}
    </div>
  );
};

export default Home;
