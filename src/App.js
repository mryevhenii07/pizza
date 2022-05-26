import "./scss/app.scss";
import Header from "./component/Header";
import Sort from "./component/Sort";
import Categories from "./component/Categories";
import PizzaBlock from "./component/PizzaBlock";
import pizzas from "./assets/pizzas.json";
console.log(pizzas);

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
                title={title}
                price={price}
                imageUrl={imageUrl}
                sizes={sizes}
                types={types}
                id={id}
              />
            ))}

            {/* <PizzaBlock title={'Gavai'} price={195} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
