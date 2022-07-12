import React from "react";
import { useForm } from "react-hook-form";

import s from "./Registration.module.scss";

const Registration = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={s.title}>Create Account</h2>

      <label htmlFor="" className={s.label}>
        <input
          type="text"
          {...register("yourName", {
            required: "Введіть текст!",
            maxLength: { value: 5, message: "Максимум 5 символів" },
            minLength: { value: 2, message: "Мінімум 2 символи" },
          })}
          placeholder="Your Name"
          className={s.input}
        />
        <div className={s.errors} style={{ height: 20 }}>
          {errors?.yourName && (
            <p className={s.textError}>{errors?.yourName?.message}</p>
          )}
        </div>
      </label>

      <label htmlFor="" className={s.label}>
        <input
          type="email"
          {...register("yourEmail", {
            required: "Введіть текст!",
            maxLength: { value: 16, message: "Максимум 16 символів" },
            minLength: { value: 6, message: "Мінімум 6 символи" },
          })}
          placeholder="Your Email"
          className={s.input}
        />

        <div className={s.errors} style={{ height: 20 }}>
          {errors?.yourEmail && (
            <p className={s.textError}>{errors?.yourEmail?.message}</p>
          )}
        </div>
      </label>

      <label htmlFor="" className={s.label}>
        <input
          type="password"
          {...register("password", {
            required: "Введіть текст!",
            maxLength: { value: 16, message: "Максимум 16 символів" },
            minLength: { value: 1, message: "Максимум 1 символів" },
          })}
          placeholder="Password"
          className={s.input}
        />
        <div className={s.errors} style={{ height: 20 }}>
          {errors?.password && (
            <p className={s.textError}>{errors?.password?.message}</p>
          )}
        </div>
      </label>

      <label htmlFor="" className={s.label}>
        <input
          type="password"
          {...register("repeatPassword", {
            required: "Введіть текст!",
            maxLength: { value: 16, message: "Максимум 16 символів" },
            minLength: { value: 1, message: "Максимум 1 символів" },
          })}
          placeholder="Repeat your Password"
          className={s.input}
        />
        <div className={s.errors} style={{ height: 20 }}>
          {errors?.repeatPassword && (
            <p className={s.textError}>{errors?.repeatPassword?.message}</p>
          )}
        </div>
      </label>

      <label htmlFor="" className={s.wrapCheckbox}>
        <input type="checkbox" className={s.checkBox} />I agree all statements
        in
        <a href="" className={s.service}>
          Terms of service
        </a>
      </label>

      <button type="submit" className={s.btn} disabled={!isValid}>
        sign up
      </button>
      <p className={s.already}>
        Have already an account?{" "}
        <a href="#" className={s.loginHere}>
          Login here
        </a>
      </p>
    </form>
  );
};

export default Registration;
