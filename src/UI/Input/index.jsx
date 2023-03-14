import React from "react";
import s from "./input.module.scss";

const Input = ({ logo, child }) => {
  return (
    <div className={s.root}>
      {logo} {child}
    </div>
  );
};

export default Input;
