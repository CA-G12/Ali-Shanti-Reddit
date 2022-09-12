const { signUp, getSignUp } = require("./signUp");
const { getLogin, login } = require("./login");
const { pageNotPage, serverError } = require("./error");
const addPost = require("./posts/addPost");
const getPost = require("./posts/getPost");
const deletePost = require("./posts/deletePost");
const getAllPosts = require("./posts/getAllPosts");
const getAllPostsById = require("./posts/getAllPostsById");
const getProfile = require("./profile/getProfile");
const decreaseVote = require("./posts/decreaseVote");
const increaseVote = require("./posts/increaseVote");
const addComment = require("./comments/addComment");
const logout = require("./logout");
const displayPost = require("./comments/displayPost");
const comments = require("./comments/comments");
const getAllComments = require("./comments/getAllComments");

module.exports = {
  signUp,
  getSignUp,
  getLogin,
  login,
  addPost,
  getPost,
  deletePost,
  getAllPosts,
  getAllPostsById,
  decreaseVote,
  increaseVote,
  getProfile,
  addComment,
  logout,
  displayPost,
  comments,
  getAllComments,
  pageNotPage,
  serverError,
};
