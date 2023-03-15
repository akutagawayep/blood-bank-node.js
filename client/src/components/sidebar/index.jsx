import Button from "../../UI/Button/index";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../..";
import {
  clinicsRoutes,
  donorRoutes,
  isntAuthRoutes,
  patientRoutes,
  publicRoutes,
} from "../../routes/routes";
import Hr from "../../UI/Hr";
import s from "./sidebar.module.scss";
import { MAIN_ROUTE } from "../../routes/routesData";

const Sidebar = () => {
  const { store } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  const classes = [`${s.navBar}`];
  const classesIcon = [`${s.icon}`];

  const open = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    classes.push(`${s.open}`);
    classesIcon.push(`${s.close}`);
  }

  const routes = () => {
    switch (store.user.role) {
      case "донор":
        return donorRoutes.map(({ path, title }) => (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navlink" : "navlink"
              }
              key={path}
              to={path}
            >
              {title}
            </NavLink>
            <Hr />
          </>
        ));
      case "пациент":
        return patientRoutes.map(({ path, title }) => (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navlink" : "navlink"
              }
              key={path}
              to={path}
            >
              {title}
            </NavLink>
            <Hr />
          </>
        ));
      case "доктор":
        return clinicsRoutes.map(({ path, element, title }) => (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navlink" : "navlink"
              }
              key={element}
              to={path}
            >
              {title}
            </NavLink>
            <Hr />
          </>
        ));
    }
  };
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.icon} onClick={open}>
          <span></span>
        </div>

        <div className={classes.join(" ")} onClick={open}>
          <nav className={s.inner} onClick={(e) => e.preventDefault()}>
            <div className={classesIcon.join(" ")} onClick={open}>
              <span></span>
            </div>
            {publicRoutes.map(({ path, title }) => (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active navlink" : "navlink"
                  }
                  key={path}
                  to={path}
                >
                  {title}
                </NavLink>
                <Hr />
              </>
            ))}
            {store.isAuth
              ? routes()
              : isntAuthRoutes.map(({ path, title }) => (
                  <>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active navlink" : "navlink"
                      }
                      key={path}
                      to={path}
                    >
                      {title}
                    </NavLink>
                    <Hr />
                  </>
                ))}
          </nav>
        </div>
      </div>
      {store.user?.email}
      {store.user?.email ? (
        <NavLink className={s.navlink} to={MAIN_ROUTE}>
          <Button
            style={{ fontSize: "1.2em" }}
            title="Выйти"
            onclick={() => store.logout()}
          />
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );
};

export default observer(Sidebar);
