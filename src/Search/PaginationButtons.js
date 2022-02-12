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
          ) : (
            <></>
          )}
        </span>
      ))}
    </>
  );
};
