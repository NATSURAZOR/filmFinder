import React, { useContext } from "react";
import { GlobalContext } from "../Favorites/GlobalState";
import { MovieControls } from "../Favorites/MovieControls";
import { AllDetails } from "./ContentDetail";

const Content = ({ movieData }) => {
  const { addMovieToFavorites, favorites } = useContext(GlobalContext);

  let storedMovie = favorites.find((o) => o.Title === movieData.Title);

  const favoritesDisabled = storedMovie ? true : false;

  const title = `${movieData.Title}`;
  const poster = `${movieData.Poster}`;

  return (
    <div>
      <header>
        <h1>{title}</h1>
        <button
          className="movie-detail-button"
          disabled={favoritesDisabled}
          onClick={() => addMovieToFavorites(movieData)}
        >
          &#9825;
        </button>
        <MovieControls disabled={!favoritesDisabled} movie={movieData} />
      </header>
      <div className="movie-detal-image-section">
        <img src={poster} alt="" />
      </div>
      <AllDetails key={"details"} movieData={movieData} />
    </div>
  );
};

export default Content;
