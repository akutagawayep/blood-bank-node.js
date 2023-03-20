import React, { useContext } from "react";
import { Context } from "../..";
import s from "./modal.module.scss";

const Modal = ({
  state,
  id,
  active,
  setActive,
  patients,
  setPatients,
  setIsvisible,
}) => {
  const { store } = useContext(Context);
  const del = () => {
    store.delete({ id });
    setPatients(patients.filter((e) => e.uid !== id));
    setIsvisible(false);
  };

  const change = () => {
    setActive(!active);
    console.log(!active);
    store.activate(id, active);
    setIsvisible(false)
  };

  if (state === false) return "";
  return (
    <div className={s.root}>
      <div className={s.inner}>
        <h3>Удалить этот пост?</h3>
        <div className={s.btns}>
          <button onClick={del}>да</button>
          <button onClick={() => setIsvisible(false)}>нет</button>
        </div>
        <h3>Поменять статус поста?</h3>
        <div className={s.btns}>
          <button onClick={change}>да</button>
          <button onClick={() => setIsvisible(false)}>нет</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
