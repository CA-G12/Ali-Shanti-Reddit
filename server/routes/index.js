const router = require("express").Router();
const {
  signUp,
  getSignUp,
  getLogin,
  login,
  addPost,
  getPost,
  deletePost,
  getAllPosts,
  getAllPostsById,
  getProfile,
  increaseVote,
  decreaseVote,
  addComment,
  logout,
  comments,
  displayPost,
  pageNotPage,
  getAllComments,
  serverError,
} = require("../controllers");
const auth = require("../middleware/auth");
const userData = require("../middleware/userData");

router.route("/signUp").get(getSignUp).post(signUp);
router.route("/login").get(getLogin).post(login);
router.route("/api/v1/allPosts").get(getAllPosts);
router.route("/api/v1/getAllPostsById/:id").get(getAllPostsById);
router.route("/addPost").get(auth, getPost).post(auth, addPost);
router.route("/profile/:id").get(getProfile);
router.route("/increaseVote/:id").get(auth, increaseVote);
router.route("/decreaseVote/:id").get(auth, decreaseVote);
router.route("/userData").get(userData);
router.route("/post/:id").delete(auth, deletePost);
router.route("/addComment/:id").post(auth, addComment);
router.get("/logout", logout);
router.get("/api/v1/displayPost/:id", displayPost);
router.get("/displayPost/:id", comments);
router.get("/getAllComments/:id", getAllComments);
router.use(pageNotPage);
router.use(serverError);

module.exports = router;
