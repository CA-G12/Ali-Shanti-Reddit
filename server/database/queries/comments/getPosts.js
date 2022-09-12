const connection = require("../../config/connection");

const getPosts = (id) =>
  connection.query(
    "SELECT *, p.id  FROM posts p JOIN users u ON (u.id = p.user_id) WHERE p.id = $1 ",
    [id]
  );

module.exports = getPosts;
