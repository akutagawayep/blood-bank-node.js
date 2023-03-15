import React, { useState } from "react";
import s from "./card.module.scss";
import { AiFillAliwangwang, AiFillGitlab } from "react-icons/ai";
import Input from "../../UI/Input";

const Card = ({ email, name, role, type, number, isActive, city }) => {
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
          <h1> {name}</h1>
          <h2>
            {role} {type}
          </h2>
        </form>
        <h3> {email}</h3>
        <h3> {number}</h3>
        <h3> {city}</h3>
        <Input
          child={
            <input
              type="checkbox"
              value={check}
              onChange={(e) => setCheck(e.target.value)}
            />
          }
        />
      </div>
    </div>
  );
};

export default Card;
