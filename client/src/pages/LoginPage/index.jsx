import React, { useContext, useState } from "react";
import Input from "../../UI/Input";
import s from "./login.module.scss";
import { AiFillMail, AiFillLock, AiFillPoundCircle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import login from "../../UI/assets/img/login.png";
import Button from "../../UI/Button";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { INFO_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "../../routes/routesData";
const LoginPage = () => {
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("");
  const [type,setType]=useState(false)
  const [role, setRole] = useState("");

  const { store } = useContext(Context);

  return (
  
    <div className={s.root}>
  
      <div className={s.main}>
        <div className={s.container}>
          <h1>ЛОГИН</h1>
          <Input
            logo={<AiFillMail />}
            child={
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            }
          />
          <Input
            logo={<AiFillLock />}
            child={
              <><input
                type={type?"text":"password"}
                value={password}
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
              /> <button onClick={()=>setType(!type)}>{type?<AiFillEye/>:<AiFillEyeInvisible/>}</button></>
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
              <label htmlFor="пациент">Пациент</label>
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
            title="Зайти"
            onclick={() => {
             return store.login(email, password, role)  
           
            }}
          />
          <h3>нет аккаунта?</h3>
          <NavLink to={REGISTRATION_ROUTE}>
            <Button title="Зарегистрироваться" />
          </NavLink>
        </div>
        <img src={login} alt="к сожалению не удалось загрузить картинку" />
      </div>
    </div>
  );
};

export default observer(LoginPage);
