const connection = require("../../config/connection");

const insertPostQuery = (title, post, user_id) =>
  connection.query(
    "INSERT INTO posts (title, post, user_id) VALUES ($1, $2, $3) RETURNING *",
    [title, post, user_id]
  );

module.exports = insertPostQuery;
