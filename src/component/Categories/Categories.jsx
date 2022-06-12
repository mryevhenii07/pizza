import { nanoid } from "nanoid";
import s from "./Categories.module.scss";

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
    <nav className="categories">
      <ul className="animate__animated animate__slideInLeft">
        {categoryId.map((category, index) => (
          <li
            key={nanoid()}
            onClick={() => onClickCategories(index)}
            className={value === index ? "active" : ""}
          >
            {category}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
