import React, { useState } from "react";
import s from "./card.module.scss";
import {
  AiFillAliwangwang,
  AiFillCheckSquare,
  AiFillDelete,
  AiFillGitlab,
} from "react-icons/ai";
import Button from "../../UI/Button/index";

const Card = ({ email, name, role, type, number, isActive, city ,onClick}) => {
  const [check, setCheck] = useState(isActive);
  return (
    <div className={s.root}>
      {role === "доктор" ? (
        <AiFillAliwangwang className={s.icon} />
      ) : (
        <AiFillGitlab className={s.icon} />
      )}

      <div className={s.container}>
        <form>
          <h2> {name}</h2>
          <h3>
            {role} {type}
          </h3>
        </form>
        <form>
          <p> {email}</p>
          <p> {number}</p>
        </form>
        <p> {city}</p>

        <Button title={<AiFillDelete />} onclick={()=>onClick}/>
      </div>
    </div>
  );
};

export default Card;
