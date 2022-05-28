import React from "react";
import s from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={s.wrap}>
      <span className={s.span}>😒</span>
      <h1> NotFoundBlock</h1>
    </div>
  );
};

export default NotFoundBlock;
