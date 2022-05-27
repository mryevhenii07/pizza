/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./Search.module.scss";

const Search = ({ setSearchValue, searchValue }) => {
  return (
    <div className={s.root}>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className={s.input}
        placeholder="Пошук піци..."
      />
    </div>
  );
};

export default Search;
