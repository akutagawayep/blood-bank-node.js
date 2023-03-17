import $api from "../http";

export default class PostService {
  static fetchposts() {
    return $api.get("/getPosts");
  }
  static async post(payload) {
    return $api.post("/post", payload);
  }
}
