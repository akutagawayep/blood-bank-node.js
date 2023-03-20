import React from "react";
import s from "./card.module.scss";
import {
  AiFillAliwangwang,
  AiFillDelete,
  AiFillGitlab,
} from "react-icons/ai";
import Button from "../../UI/Button/index";

const Card = ({
  email,
  name,
  role,
  type,
  number,
  isActive,
  setActive,
  city,
  id,
  setIsVisible,
  setId,
}) => {
  const del = async () => {
    setIsVisible(true);
    setId(id);
  };

  const change = async () => {
    setIsVisible(true);
    setId(id);
    console.log(id);
    setActive(isActive);
    console.log(isActive+"ghj");
  };
  return (
    <div className={s.root}>
      {role === "доктор" ? (
        <AiFillAliwangwang className={s.icon} />
      ) : (
        <AiFillGitlab className={s.icon} />
      )}

      <div className={s.container}>
        <form>
          <h2>
            {name} <br /> {id}
          </h2>
          <h3>
            {role} {type}
          </h3>
        </form>
        <form>
          <p> {email}</p>
          <p> {number}</p>
        </form>
        <p> {city}</p>
        <Button
          title={isActive ? "Активный" : "не активный"}
          onclick={change}
        />
        <Button title={<AiFillDelete />} onclick={del} />
      </div>
    </div>
  );
};

export default Card;
