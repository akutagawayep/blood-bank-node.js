import axios from "axios";
import React from "react";
import s from "./modal.module.scss";

const Modal = ({ state, id, setIsvisible }) => {


  const del = () => {
    axios.delete("http://localhost:3001/tasks/" + id);
    
    setIsvisible(false);
  };

  if (state === false) return "";
  return (
    <div className={s.root}>
      <div className={s.inner}>
        <h3>Delete this post?</h3>
        <div className={s.btns}>
          <button onClick={del}>Yes</button>
          <button onClick={() => setIsvisible(false)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
