//cross-env PUBLIC_URL='/'
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useCallback, useState } from "react";

import s from "./Search.module.scss";
import { setSearchInput } from "../../store/slices/filterSlice";

const Search = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.filter.searchInput);

  const onClickClear = () => {
    setSearchInput(searchInput);
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchInput(str));
    }, 250),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={s.root}>
      <svg
        className={s.search}
        height="23"
        width="23"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        type="text"
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        className={s.input}
        placeholder="Пошук піци..."
      />
      <svg
        onClick={onClickClear}
        className={s.close}
        height="22"
        width="22"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        space="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
      </svg>
    </div>
  );
};

export default Search;
