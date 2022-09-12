const connection = require("../../config/connection");

const displayPostsById = (id) =>
  connection.query(
    "SELECT *, p.id  FROM posts p JOIN users u ON (u.id = p.user_id) WHERE u.id = $1 ORDER BY p.id DESC",
    [id]
  );

module.exports = displayPostsById;
