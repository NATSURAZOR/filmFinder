import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ itemID, title, year, image }) => {
  return (
    <div>
      <h1>
        <Link to={`/movie/${itemID}`}>{title}</Link>
      </h1>
      <p>{year}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Movie;
