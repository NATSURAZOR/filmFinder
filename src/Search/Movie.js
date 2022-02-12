import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ itemID, title, year, image }) => {
<<<<<<< HEAD
  if (image === "N/A") {
    image = process.env.PUBLIC_URL + "/images/no-poster.png";
  }

  return (
    <Link className="movie-title-link" to={`/movie/${itemID}`}>
      <div className="one-movie">
        <div className="movie-info">
          <div className="image-container">
            <img src={image} alt="" />
          </div>

          <div className="title-year-container">
            <h1>{title}</h1>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </Link>
=======
  return (
    <div>
      <h1>
        <Link to={`/movie/${itemID}`}>{title}</Link>
      </h1>
      <p>{year}</p>
      <img src={image} alt="" />
    </div>
>>>>>>> 4d1a88e00d4db9fa2409577686fc512ce0922ffc
  );
};

export default Movie;
