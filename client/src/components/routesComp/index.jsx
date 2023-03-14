import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "../..";
import {
  clinicsRoutes,
  donorRoutes,
  patientRoutes,
  publicRoutes,
} from "../../routes/routes.js";
import { MAIN_ROUTE } from "../../routes/routesData";

const RoutesComp = () => {
  const { store } = useContext(Context);

  const routes = () => {
    switch (store.user.role) {
      case "донор":
        return donorRoutes.map(({ path, key, element }) => (
          <Route key={key} path={path} element={element} />
        ));
      case "пациент":
        return patientRoutes.map(({ path, key, element }) => (
          <Route key={key} path={path} element={element} />
        ));
      case "доктор":
        return clinicsRoutes.map(({ path, key, element }) => (
          <Route key={key} path={path} element={element} />
        ));
      default:
        return publicRoutes.map(({ path, key, element }) => (
          <Route key={key} path={path} element={element} />
        ));
    }
  };

  return (
    <Routes>
      {store.isAuth
        ? routes()
        : publicRoutes.map(({ path, key, element }) => (
            <Route key={key} path={path} element={element} />
          ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
};

export default observer(RoutesComp);
