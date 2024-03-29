import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ itemID, title, year, image }) => {
  if (image === "N/A") {
    image = process.env.PUBLIC_URL + "/images/no-poster.png";
  }

  return (
    <Link className="movie-title-link" to={`/movie/${itemID}`}>
      <div className="one-movie">
        <div className="movie-info">
          <div className="image-container">
            <img id="movie-img" src={image} alt="" />
          </div>

          <div className="title-year-container">
            <h1 id="movie-title">{title}</h1>
            <p id="movie-year">{year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
