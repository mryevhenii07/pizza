import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart } from "../Redux/slices/cartSlice";

const PizzaBlock = ({ item }) => {
  const [countPizza, seCountPizza] = useState(0);
  const [typeActive, setTypeActive] = useState(0);
  const [sizeActive, setSizeActive] = useState(0);
  const typeName = ["тонке", "традиційне"];

  const despatch = useDispatch();

  const handelClick = () => {
    seCountPizza((prevState) => prevState + 1);
    despatch(setItemInCart(item));
  };
  return (
    <div className="pizza-block-wrap">
      <div className="pizza-block">
        <img className="pizza-block__image" src={item.imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{item.title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {item.types.map((type) => (
              <li
                key={nanoid()}
                onClick={() => setTypeActive(type)}
                className={typeActive === type ? "active" : ""}
              >
                {typeName[type]}
              </li>
            ))}
          </ul>
          <ul>
            {item.sizes.map((size, inx) => (
              <li
                key={nanoid()}
                onClick={() => setSizeActive(inx)}
                className={sizeActive === inx ? "active" : ""}
              >
                {size}sm
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">від {item.price}₴ </div>
          <button
            className="button button--outline button--add"
            onClick={handelClick}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Додати</span>
            <i>{countPizza}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
