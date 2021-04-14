import React from "react";
import { arrayFromRange } from "../../utils/arrayFromRange";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = arrayFromRange(1, pagesCount);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => onPageChange(page)}
                style={{ cursor: "pointer" }}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
