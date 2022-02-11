import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Pagination from "./Pagination";


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
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    getMovies();
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  const getMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}&page=${currentPage}`
    );
    const data = await response.json();
    setMovies(data.Search);
    setTotalMovies(data.totalResults);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <div className="pages">
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={totalMovies}
          paginate={paginate}
          currentPage={currentPage}
          totalPages={Math.ceil(totalMovies / moviesPerPage)}
        />
      </div>
    </div>
  );
};

export default Home;
