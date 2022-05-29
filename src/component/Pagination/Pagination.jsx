import React from "react";
import ReactPaginate from "react-paginate";
import s from "./Pagination.module.scss";

const Pagination = ({ currentPage, onChangeSort }) => {
  return (
    <div>
      <ReactPaginate
        className={s.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangeSort(e.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={4}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
//les 10 archakovBlog
