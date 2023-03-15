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
      localStorage.setItem("token", res.data.accessToken);
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
      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      e.response.status === 400
        ? toast.error(e.response.data.message)
        : toast.warning("непредвиденная ошибка");
      return "";
    }
  }

  async post() {
    try {
      const res = await PostService.post();
      console.log(res);
    } catch (e) {
      e.response.status === 400
        ? toast.error(e.response.data.message)
        : toast.warning("непредвиденная ошибка");
      return "";
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser();
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
      localStorage.setItem("token", res.data?.accessToken);
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
