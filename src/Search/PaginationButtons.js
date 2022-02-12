import React from "react";

export const PaginationButtons = ({
  pageNumbers,
  paginate,
  totalPages,
  currentPage,
}) => {
  return (
    <>
      {pageNumbers.map((number) => (
        <span key={number}>
          {number === 1 ||
          number === currentPage ||
          number === currentPage + 1 ||
          number === currentPage + 2 ||
          number === currentPage - 1 ||
          number === currentPage - 2 ||
          number === totalPages ? (
<<<<<<< HEAD
            <button
              className={
                currentPage === number
                  ? "page-button active-button"
                  : "page-button"
              }
              onClick={() => paginate(number)}
            >
              {number}
            </button>
=======
            <button onClick={() => paginate(number)}>{number}</button>
>>>>>>> 4d1a88e00d4db9fa2409577686fc512ce0922ffc
          ) : (
            <></>
          )}
        </span>
      ))}
    </>
  );
};
