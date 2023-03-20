import React, { useContext } from "react";
import Sidebar from "./components/sidebar";
import { observer } from "mobx-react-lite";
import "./App.css";
import RoutesComp from "./components/routesComp";
import { ToastContainer} from "react-toastify";
import { Context } from ".";
import Loader from "./components/loader";
const App = () => {
  const { store } = useContext(Context);

  return (
    <>
    {store.isLoading?<Loader/>:""} 
      <Sidebar />
     
      <RoutesComp />
      <ToastContainer
        pauseOnFocusLoss
        draggable
        pauseOnHover
        position="top-left"
        autoClose={true}
        closeButton={false}
        hideProgressBar={false}
        newestOnTop={true}
        role="alert"
      />
    </>
  );
};

export default observer(App);
