// import { useState } from "react";
import { nanoid } from "nanoid";

const Categories = ({ value, onClickCategories }) => {
  const categoryId = [
    "Всі",
    "М'ясні",
    "Вегетаріанська",
    "Гриль",
    "Гострі",
    "Закриті",
  ];

  return (
    <div className="categories">
      <ul>
        {categoryId.map((category, index) => (
          <li
            key={nanoid()}
            onClick={() => onClickCategories(index)}
            className={value === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
