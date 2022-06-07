import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  setCategoryId,
  setCurrentPage,
} from "../component/Redux/slices/filterSlice";
import Categories from "../component/Categories";
import Sort from "../component/Sort";
import PizzaBlock from "../component/PizzaBlock/PizzaBlock";
import Skeleton from "../component/PizzaBlock/Skeleton";
import Pagination from "../component/Pagination/Pagination";

const Home = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //skeleton

  const dispatch = useDispatch();

  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const searchInput = useSelector((state) => state.filter.searchInput);

  const onClickCategories = (id) => {
    dispatch(setCategoryId(id));
  };

  const getPizza = async () => {
    setIsLoading(true); //skeleton for category
    const API = "https://628f5e0d0e69410599db2da5.mockapi.io/items";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sortType === "rating" ? "desc" : "asc";

    try {
      const { data } = await axios.get(
        `${API}?search=${searchInput}&${category}&sortBy=${sortType}&order=${order}&page=${currentPage}&limit=8`
      );
      setItems(data);
    } catch (error) {
      console.log("BLYAAA", error);
    } finally {
      setIsLoading(false);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => getPizza(), [categoryId, sortType, searchInput, currentPage]); //skeleton pagination
  useEffect(() => {
    const queryString = qs.stringify({
      sortType,
      categoryId,
      currentPage,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sortType, currentPage, navigate]);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

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
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, inx) => <Skeleton key={inx} />) //skeletonv
          : items.map(
              ({ id, title, price, imageUrl, sizes, types, rating }) => (
                <PizzaBlock
                  key={id}
                  title={title}
                  price={price}
                  imageUrl={imageUrl}
                  sizes={sizes}
                  types={types}
                  id={id}
                  rating={rating}
                />
              )
            )}
      </div>
      <Pagination currentPage={currentPage} onChangeSort={onChangePage} />
    </div>
  );
};

export default Home;
