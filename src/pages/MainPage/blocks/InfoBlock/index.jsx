import React from "react";
import Hr from "../../../../UI/Hr";
import s from "./info.module.scss"

const InfoBlock = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        {" "}
        <h1>ПОДРОБНЕЕ О НАС</h1>
        <Hr/>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          reprehenderit commodi, architecto quibusdam quasi beatae tenetur
          praesentium quos at, eius rerum voluptatem dolorem dolorum sunt, rem
          necessitatibus distinctio laudantium cumque. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Officiis reprehenderit commodi,
          architecto quibusdam quasi beatae tenetur praesentium quos at, eius
          rerum voluptatem dolorem dolorum sunt, rem necessitatibus distinctio
          laudantium cumque.
        </p>
      </div>
      <div className={s.smth}></div>
    </div>
  );
};

export default InfoBlock;
