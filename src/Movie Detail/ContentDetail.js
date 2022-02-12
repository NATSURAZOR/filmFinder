import React from "react";

export const Detail = ({ movieData, element }) => {
  return (
    <div className="movie-detail-key-and-value">
      <div className="movie-detail-key">
        <p>{`${element}`}:</p>
      </div>
      <div className="movie-detail-value">
        <p>{`${movieData[element]}`}</p>
      </div>
    </div>
  );
};

export const DetailWithObject = ({ movieData, element }) => {
  return (
    <div className="movie-detail-key-and-value">
      <div className="movie-detail-key">
        <p>{`${element}`}:</p>
      </div>
      <div className="movie-detail-value">
        {movieData[`${element}`].map((rating, index) => (
          <div key={rating + index}>
            {`${rating.Source}`}: {rating.Value} <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export const AllDetails = ({ movieData }) => {
  return (
    <div className="movie-detal-about-section">
      {Object.keys(movieData).map((element) => (
        <div key={element}>
          {element !== "Title" &&
          element !== "Poster" &&
          element !== "Ratings" &&
          element !== "Metascore" &&
          element !== "Response" ? (
            <Detail movieData={movieData} element={element} />
          ) : (
            <>
              {element === "Ratings" ? (
                <DetailWithObject movieData={movieData} element={element} />
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
