import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import Movie from "../Search/Movie";
import { MovieControls } from "./MovieControls";

export const Favorite = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="search">
      <h1 className="fav-h1">Your Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="movies-fav">
          {favorites.map((movie) => (
            <div className="fav-movie" key={movie.imdbID}>
              <Movie
                itemID={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                image={movie.Poster}
              />
              <MovieControls movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="no-movie">No movies in your list</h2>
      )}
    </div>
  );
};

export default Favorite;
