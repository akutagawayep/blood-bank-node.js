const PostModel = require("../models/post-model");

const PostDto = require("../dtos/post-dto");
const e = require("express");

class PostService {
  async donationPostservice(
    email,
    name,
    type,
    number,
    role,
    isActive,
    city,
    date,
    uid
  ) {
    const post = await PostModel.create({
      email: email,
      name: name,
      type: type,
      number: number,
      role: role,
      isActive: isActive,
      city: city,
      date: date,
      uid: uid,
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
  async delPost(id) {
    try {
      const res = await PostModel.findOneAndDelete({ uid: id }, {});
      return res ? true : false;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new PostService();
