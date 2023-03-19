import React, { useContext } from "react";
import { Context } from "../..";
import s from "./modal.module.scss";

const Modal = ({ state, id, patients, setPatients, setIsvisible }) => {
  const { store } = useContext(Context);
  const del = () => {
    store.delete({uid:id});
    setPatients(patients.filter((e) => e.uid !== id));
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
