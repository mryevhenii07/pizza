import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

import s from "./FullPizza.module.scss";

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
  return (
    <div className={s.wrapperModal}>
      {!pizza ? (
        <TailSpin color="#fe5f1e" height={180} width={180} />
      ) : (
        <>
          <img src={pizza.imageUrl} alt="imag pizza" className={s.img} />
          <h2 className={s.title}>{pizza.title}</h2>
          <p>{pizza.info}</p>
          <Link to={"/pizza"}>
            <button className={s.btn}>Назад </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default FullPizza;
