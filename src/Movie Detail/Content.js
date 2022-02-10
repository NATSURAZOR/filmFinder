import React, { useContext } from "react";
import { GlobalContext } from "../Favorites/GlobalState";
import { MovieControls } from "../Favorites/MovieControls";

const Content = ({ movieData }) => {
  const { addMovieToFavorites, favorites } = useContext(GlobalContext);

  let storedMovie = favorites.find((o) => o.Title === movieData.Title);

  const favoritesDisabled = storedMovie ? true : false;

  const title = `${movieData.Title}`;
  const poster = `${movieData.Poster}`;
  const ratings = movieData.Ratings;

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
      <div className="movie-detal-about-section">
        {Object.keys(movieData).map((element) => (
          <div key={element} className="movie-detail-key-and-value">
            <p className="movie-detail-key">{`${element}`}</p>
            <p className="movie-detail-value">{`${movieData[element]}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
