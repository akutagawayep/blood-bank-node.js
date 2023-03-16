
import $api from "../http";

export default class AuthService {
  static async login(email, password, role) {
    const data = await $api.post("/login", { email, password, role });
    return data;
  }
  static async registration(email, password, role) {
    return $api.post("/registration", { email, password, role });
  }
  static async logout() {
    return $api.post("/logout");
  }
}
