import axios from "axios";
import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { API_URL } from "../http/index.js";
import AuthService from "../services/AuthService.js";
import PostService from "../services/PostService.js";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;  

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }
  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  async login(email, password, role) {
    try {
      const res = await AuthService.login(email, password, role);
      console.log(res);
      this.setAuth(true);
      this.setUser(res.data.user);
      toast.success("вы успешно зарегестрированы", { theme: "dark" });
      console.log(res.data.user);
    } catch (e) {
      e.response.status === 400
        ? toast.error(e.response.data.message)
        : toast.warning("непредвиденная ошибка", { theme: "dark" });
      return "";
    }
  }
  async registration(email, password, role) {
    try {
      const res = await AuthService.registration(email, password, role);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      e.response.status === 400
        ? toast.error(e.response.data.message)
        : toast.warning("непредвиденная ошибка");
      return "";
    }
  }

  async post(payload) {
    const res = await PostService.post(payload);
    if (res.status === 200) {
      const roleWord =
        payload.role === "донор"
          ? "сдачи"
          : payload.role === "пациент"
          ? "получения"
          : "";
      toast.success(
        "Вы успешно записались на прием для " + roleWord + " крови!"
      );
    } else if (res.status === 400) {
      toast.error(res.data.message);
    } else {
      toast.warning("непредвиденная ошибка");
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      // localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser();
      toast.success("Вы успешно вышли из аккаунта!");
    } catch (e) {
      console.log(e.res?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      // localStorage.setItem("token", res.data?.accessToken);
      this.setAuth(true);
      this.setUser(res.data?.user);
    } catch (e) {
      e.response.status === 400
        ? toast.warn(e.response.data.message)
        : toast.warning("непредвиденная ошибка");
      return "";
    } finally {
      this.setLoading(false);
    }
  }
}
