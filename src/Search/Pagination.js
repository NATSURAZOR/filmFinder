import React from "react";
import { PaginationButtons } from "./PaginationButtons";

const Pagination = ({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
  totalPages,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {totalPages > 0 ? (
        <>
          <button
            disabled={currentPage - 1 <= 0 ? true : false}
            onClick={() => paginate(currentPage - 1)}
<<<<<<< HEAD
            className="prev-page page-button"
=======
            className="prev-page"
>>>>>>> 4d1a88e00d4db9fa2409577686fc512ce0922ffc
          >
            &#171;
          </button>

          <PaginationButtons
            pageNumbers={pageNumbers}
            paginate={paginate}
            currentPage={currentPage}
            totalPages={totalPages}
          />

          <button
            disabled={currentPage + 1 > totalPages}
            onClick={() => paginate(currentPage + 1)}
<<<<<<< HEAD
            className="next-page page-button"
=======
            className="next-page"
>>>>>>> 4d1a88e00d4db9fa2409577686fc512ce0922ffc
          >
            &#187;
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;
