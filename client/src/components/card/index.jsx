import React from "react";
import s from "./card.module.scss";
import { /*AiFillAliwangwang,*/AiFillGitlab } from "react-icons/ai";

const Card = ({ email, name, role, type, number }) => {
  return (
    <div className={s.root}>
      {/* <AiFillAliwangwang className={s.icon} /> */}
      <AiFillGitlab className={s.icon}/>
      <div className={s.container}>
        <form>
          <h1> {name}</h1>
          <h2> {role} {type} </h2>
          
        </form>
        <h3> {email}</h3>
        <h3> {number}</h3>
      </div>
    </div>
  );
};

export default Card;
