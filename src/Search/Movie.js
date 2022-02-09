import React from "react";

const Movie = ({ title, year, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{year}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Movie;
