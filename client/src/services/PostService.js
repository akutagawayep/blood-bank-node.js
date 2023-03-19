import $api from "../http";

export default class PostService {
  static fetchposts() {
    return $api.get("/getPosts");
  }
  static async post(payload) {
    return $api.post("/post", payload);
  }
  static async delete(payload) {
    return $api.delete("/post/del", {data:payload});
  }
}
