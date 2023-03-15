import React, { useContext, useEffect } from "react";
import Sidebar from "./components/sidebar";
import { observer } from "mobx-react-lite";
import "./App.css";
import RoutesComp from "./components/routesComp";
import { ToastContainer } from "react-toastify";
import { Context } from ".";

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <ToastContainer>
      <Sidebar />
      <RoutesComp />
    </ToastContainer>
  );
};

export default observer(App);
