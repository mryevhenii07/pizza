/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import s from "./Search.module.scss";
import { SearchContext } from "../../App.js";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
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
