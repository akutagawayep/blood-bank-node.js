import React, { useContext, useState } from "react";
import Input from "../../UI/Input";
import s from "./registration.module.scss";
import { AiFillMail, AiFillLock } from "react-icons/ai";
import registration from "../../UI/assets/img/registration.png";
import Button from "../../UI/Button";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../routes/routesData";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const RegistrationPage = () => {
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { store } = useContext(Context);
  return (
    <div className={s.root}>
      <div className={s.main}>
        <div className={s.container}>
          <h1>РЕГИСТРАЦИЯ</h1>
          <Input
            logo={<AiFillMail />}
            child={
              <input
                type="text"
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            }
          />
          <Input
            logo={<AiFillLock />}
            child={
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
            }
          />
          <h3> Я...</h3>
          <form>
            <label>
              <input
                type="radio"
                name="status"
                id="donor"
                checked={role === "донор"}
                value="донор"
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="donor">Донор</label>
            </label>
            <label>
              <input
                type="radio"
                name="status"
                id="patient"
                checked={role === "пациент"}
                value="пациент"
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="patient">Пациент</label>
            </label>
            <label>
              <input
                type="radio"
                name="status"
                id="clinic"
                checked={role === "доктор"}
                value="доктор"
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="clinic">Доктор</label>
            </label>
          </form>
          <Button
            title="Зарегистрироваться"
            onclick={() => store.registration(email, password, role)}
          />
          <h3>Есть аккаунт? </h3>{" "}
          <NavLink to={LOGIN_ROUTE}>
            <Button title="Войти" />
          </NavLink>
        </div>

        <img
          src={registration}
          alt="к сожалению не удалось загрузить картинку"
        />
      </div>
    </div>
  );
};

export default observer(RegistrationPage);
