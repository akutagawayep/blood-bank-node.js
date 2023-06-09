const Router = require("express").Router;
const {
  registration,
  login,
  logout,
  activate,
  // refresh,
  getUsers,
} = require("../controllers/user-controller");
const { donationPost, getPosts,update, delPost } = require("../controllers/post-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const router = new Router();
const { body } = require("express-validator");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  body("role").isLength({ min: 4, max: 7 }),
  registration
);
router.post("/login", login);
router.post("/logout", logout);
router.get("/activate/:link", activate);
// router.get("/refresh", refresh);
router.get("/users", getUsers);
router.post("/post", body("email").isEmail(), donationPost);
router.patch("/post/:id", update);
router.get("/getPosts", getPosts);
router.delete("/post/:uid" ,delPost);

module.exports = router;
