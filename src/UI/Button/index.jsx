import React from "react";
import s from "./button.module.scss"

const Button = ({ title, style, onclick }) => {


  return (
    <button className={s.root} style={{...style}} onClick={onclick}>
      {title}
    </button>
  );
};

export default Button;
