const connection = require("../../config/connection");

const displayPostsOrderByVote = () =>
  connection.query(
    "SELECT u.name, p.title, p.post,p.date FROM posts p JOIN users u ON (u.id = p.user_id) ORDER BY p.vote"
  );

module.exports = displayPostsOrderByVote;
