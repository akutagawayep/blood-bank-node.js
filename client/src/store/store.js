import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../http/index.js";
import AuthService from "../services/AuthService.js";

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
      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.log(e.res?.data?.message);
    }
  }
  async registration(email, password, role) {
    try {
      const res = await AuthService.registration(email, password, role);
      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.log(e.res?.data?.message);
    }
  } 
  async logout() {
    try {
      const res = await AuthService.logout();
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
      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
    } finally {
      this.setLoading(false);
    }
  }
}
