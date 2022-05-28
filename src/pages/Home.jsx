import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchContext } from "../App.js";

import { setCategoryId } from "../component/Redux/slices/filterSlice";

import Categories from "../component/Categories";
import Sort from "../component/Sort";
import PizzaBlock from "../component/PizzaBlock/PizzaBlock";
import Skeleton from "../component/PizzaBlock/Skeleton";
import Pagination from "../component/Pagination/Pagination";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //skeleton
  const [currentPage, setCurrentPage] = useState(1); //pagination

  const dispatch = useDispatch();

  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const categoryId = useSelector((state) => state.filter.categoryId);

  const onClickCategories = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true); //skeleton for category
    const API = "https://628f5e0d0e69410599db2da5.mockapi.io/items";

    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sortType === "rating" ? "desc" : "asc";

    fetch(
      `${API}?search=${searchValue}&${category}&sortBy=${sortType}&order=${order}&page=${currentPage}&limit=4`
    )
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false); //skeleton
      })
      .catch((error) => console.error(error));
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]); //skeleton pagination

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          setValue={setCategoryId}
          onClickCategories={onClickCategories}
        />
        <Sort />
      </div>
      <h2 className="content__title">Всі піцacc</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, inx) => <Skeleton key={inx} />) //skeletonv
          : items.map(({ title, price, imageUrl, sizes, types, id }) => (
              <PizzaBlock
                key={id}
                title={title}
                price={price}
                imageUrl={imageUrl}
                sizes={sizes}
                types={types}
                id={id}
              />
            ))}
      </div>
      <Pagination onChangeSort={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
