import { useState } from "react";
import { nanoid } from "nanoid";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickAct = (inx) => {
    setActiveIndex(inx);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((category, ind) => (
          <li
            key={nanoid()}
            onClick={() => onClickAct(ind)}
            className={activeIndex === ind ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
