import { useState, useEffect } from "react";

import Categories from "../component/Categories";
import Sort from "../component/Sort";
import PizzaBlock from "../component/PizzaBlock/PizzaBlock";
import Skeleton from "../component/PizzaBlock/Skeleton";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //skeleton
  const [sortType, setSortType] = useState({
    name: "популярності",
    sortProperty: "rating",
  });
  const [categoriesId, setCategoriesId] = useState(0);

  console.log(sortType, categoriesId);

  useEffect(() => {
    setIsLoading(true); //skeleton for category

    const category = categoriesId > 0 ? `category=${categoriesId}` : "";
    const order = sortType.sortProperty.includes("price") ? "asc" : "desc";

    fetch(
      `https://628f5e0d0e69410599db2da5.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}&order=${order}`
    )
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false); //skeleton
      });
    window.scrollTo(0, 0);
  }, [categoriesId, sortType]);

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
          ? [...new Array(6)].map((_, inx) => <Skeleton key={inx} />) //skeleton
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
    </div>
  );
};

export default Home;
