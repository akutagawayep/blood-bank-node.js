import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../..";
import { DONATION_ROUTE, INFO_ROUTE, LOGIN_ROUTE } from "../../../../routes/routesData";
import Button from "../../../../UI/Button";
import Hr from "../../../../UI/Hr";
import s from "./starting.module.scss";
// import logo from "../../../../UI/img/logo.svg";

const StartingBlock = () => {
  const { store } = useContext(Context);
  return (
    <div className={s.root}>
      <div className={s.text}>
        <label>БАНК КРОВИ</label>
        <Hr />
        <p>ДЛЯ ЛУЧШЕЙ ЖИЗНИ</p>
        {store.isAuth ? (
          <NavLink to={DONATION_ROUTE}>
            <Button title={"Сдать кровь"} style={{ fontSize: "2em" }} />
          </NavLink>
        ) : (
          <NavLink to={LOGIN_ROUTE}>
            <Button title={"Сдать кровь"} style={{ fontSize: "2em" }} />
          </NavLink>
        )}
        <NavLink to={INFO_ROUTE}><Button title={"Узнать больше"} style={{ fontSize: "2em" }} /></NavLink>
      </div>
    </div>
  );
};

export default observer(StartingBlock);
  