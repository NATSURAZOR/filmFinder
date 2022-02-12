import React, { useContext } from "react";
import { GlobalContext } from "../Favorites/GlobalState";
import { MovieControls } from "../Favorites/MovieControls";
import { AllDetails } from "./ContentDetail";
import { AiFillHeart } from "react-icons/ai";

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
        <div className="movie-buttons">
          <button
            className="movie-detail-button"
            disabled={favoritesDisabled}
            onClick={() => addMovieToFavorites(movieData)}
          >
            <AiFillHeart />
          </button>
          <MovieControls
            className="q1"
            disabled={!favoritesDisabled}
            movie={movieData}
          />
        </div>
      </header>
      <div className="movie-information">
        <div className="movie-detail-image-section">
          <img src={poster} alt="" />
        </div>
        <AllDetails key={"details"} movieData={movieData} />
      </div>
    </div>
  );
};

export default Content;
