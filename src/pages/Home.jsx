import { useState, useEffect, useContext } from "react";

import { SearchContext } from "../App.js";
import Categories from "../component/Categories";
import Sort from "../component/Sort";
import PizzaBlock from "../component/PizzaBlock/PizzaBlock";
import Skeleton from "../component/PizzaBlock/Skeleton";
import Pagination from "../component/Pagination/Pagination";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //skeleton
  const [sortType, setSortType] = useState({
    name: "популярності",
    sortProperty: "rating",
  });
  const [currentPage, setCurrentPage] = useState(1); //pagination
  const [categoriesId, setCategoriesId] = useState(0);

  useEffect(() => {
    setIsLoading(true); //skeleton for category
    const API = "https://628f5e0d0e69410599db2da5.mockapi.io/items";
    const category = categoriesId > 0 ? `category=${categoriesId}` : "";
    const order = sortType.sortProperty.includes("price") ? "asc" : "";

    fetch(
      `${API}?search=${searchValue}&${category}&sortBy=${sortType.sortProperty}&order=${order}&page=${currentPage}&limit=4`
    )
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false); //skeleton
      })
      .catch((error) => console.error(error));
    window.scrollTo(0, 0);
  }, [categoriesId, sortType, searchValue, currentPage]); //skeleton pagination

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoriesId}
          setValue={setCategoriesId}
          onClickCategories={(id) => setCategoriesId(id)}
        />
        <Sort sortType={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, inx) => <Skeleton key={inx} />) //skeleton
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
