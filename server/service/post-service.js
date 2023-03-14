const PostModel = require("../models/post-model");

const PostDto = require("../dtos/post-dto");

class PostService {
  async donationPostservice(email, name, type, number, role, active, key) {
    const post = await PostModel.create({
      email: email,
      name: name,
      type: type,
      number: number,
      role: role,
      active: active,
      key: key,
    });
    const postDto = new PostDto(post);

    return {
      post: postDto,
    };
  }

  async getAllPosts() {
    const posts = await PostModel.find(); 
    return posts;
  }
}

module.exports = new PostService();
