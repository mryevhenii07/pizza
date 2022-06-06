import React from "react";
import cart from "../../assets/images/vector.png";
import { Link } from "react-router-dom";
import s from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <>
      <div className={s.cart}>
        <h2 className={s.title}> Кошик порожній</h2>
        <p className={s.paragraph}>
          Ймовірно ви не замовляли ще піцу.
          <br /> Для того щоб замовити піцу, перейдіть в головне сторінкую
        </p>
        <img src={cart} alt="cart-empty" className={s.img} />
        <div className={s.wrapBtn}>
          <Link to="/" className={s.btn}>
            Повернуться назад
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
