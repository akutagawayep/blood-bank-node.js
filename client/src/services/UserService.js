import $api from "../http";

export default class UserService {
  static fetchusers() {
    return $api.get("/users");
  }
}
