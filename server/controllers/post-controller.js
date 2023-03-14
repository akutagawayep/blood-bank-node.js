const postService = require("../service/post-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exeptions/api-error");

class postController {
  async donationPost(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка при валидации", errors.array())
        );
      }
      const { email, name, type, number, role, active, key } = req.body;
      const postData = await postService.donationPostservice(
        email,
        name,
        type,
        number,
        role,
        active,
        key
      );
      return res.json(postData);
    } catch (e) {
      next(e);
    }
  }

  async getPosts(req, res, next) {
    try {
      const posts = await postService.getAllPosts();
      return res.json(posts);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new postController();
