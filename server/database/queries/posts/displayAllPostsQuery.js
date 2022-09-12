const connection = require("../../config/connection");

const displayAllPostsQuery = () =>
  connection.query(
    "SELECT *, p.id, u.name FROM posts p JOIN users u ON (u.id = p.user_id) ORDER BY p.vote DESC"
  );
module.exports = displayAllPostsQuery;
