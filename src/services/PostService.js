import $api from "../http";

export default class PostService {
  static fetchposts() {
    return $api.get("/getPosts");
  }

}
