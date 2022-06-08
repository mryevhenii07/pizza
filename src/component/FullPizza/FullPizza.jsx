import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { pizzaId } = useParams();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://628f5e0d0e69410599db2da5.mockapi.io/items/${pizzaId}`
        );
        setPizza(data);
        console.log(data.price);
      } catch (error) {
        alert("error");
      }
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return "...Loading";
  }
  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h1>{pizza.title}</h1>
      <h2>{pizza.price}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse iste
        deserunt dicta quis ad odio distinctio repellat repellendus nostrum.
      </p>
    </div>
  );
};

export default FullPizza;
