import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
<<<<<<< HEAD
import { MdDelete } from "react-icons/md";
=======
>>>>>>> 4d1a88e00d4db9fa2409577686fc512ce0922ffc

export const MovieControls = ({ disabled, movie }) => {
  const { removeMovieFromFavorites } = useContext(GlobalContext);

  return (
    <div className="inner-card-controles">
      <button
        onClick={() => removeMovieFromFavorites(movie.imdbID)}
        disabled={disabled}
        className="control-btn"
      >
<<<<<<< HEAD
        <MdDelete className="fidelete" />
=======
        X
>>>>>>> 4d1a88e00d4db9fa2409577686fc512ce0922ffc
      </button>
    </div>
  );
};
