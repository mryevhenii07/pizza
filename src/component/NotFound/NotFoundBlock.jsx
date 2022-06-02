import React from "react";
import { Link } from "react-router-dom";
import s from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    // <div className={s.wrap}>
    //   <span className={s.span}>😒</span>
    //   <h1> NotFoundBlock</h1>
    // </div>
    <div className={s.container}>
      <div className={s.context}>
        <h2>404</h2>
        <h4>Opps! Page not found</h4>
        <p>
          The page you were looking for doesnt exist.You may have mistyped the
          address or the page may have moved.
        </p>
        <Link className={s.link} to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundBlock;
