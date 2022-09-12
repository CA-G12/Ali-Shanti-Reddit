const connection = require("../../config/connection");

const insertComment = (content, post_id, user_id) =>
  connection.query(
    "INSERT INTO comments (content, post_id, user_id) VALUES ($1, $2, $3)  RETURNING *",
    [content, post_id, user_id]
  );

module.exports = insertComment;
