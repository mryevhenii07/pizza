import "./scss/app.scss";
import Header from "./component/Header";
import Sort from "./component/Sort";
import Categories from "./component/Categories";
import PizzaBlock from "./component/PizzaBlock";
import pizzas from "./assets/pizzas.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піци</h2>
          <div className="content__items">
            {pizzas.map(({ title, price, imageUrl, sizes, types, id }) => (
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
      </div>
    </div>
  );
}

export default App;
