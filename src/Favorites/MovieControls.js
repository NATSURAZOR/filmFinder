import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

export const MovieControls = ({ disabled, movie }) => {
  const { removeMovieFromFavorites } = useContext(GlobalContext);

  return (
    <div className="inner-card-controles">
      <button
        onClick={() => removeMovieFromFavorites(movie.imdbID)}
        disabled={disabled}
        className="control-btn"
      >
        X
      </button>
    </div>
  );
};
