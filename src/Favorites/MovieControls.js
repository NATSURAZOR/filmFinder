import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import { MdDelete } from "react-icons/md";

export const MovieControls = ({ disabled, movie }) => {
  const { removeMovieFromFavorites } = useContext(GlobalContext);

  return (
    <div className="inner-card-controles">
      <button
        onClick={() => removeMovieFromFavorites(movie.imdbID)}
        disabled={disabled}
        className="control-btn"
      >
        <MdDelete className="fidelete" />
      </button>
    </div>
  );
};
