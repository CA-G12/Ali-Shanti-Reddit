const connection = require("../../config/connection");

const selectComments = (id) =>
  connection.query(
    "SELECT *, posts.id as post_id, comments.id as comments_id, users.id as user_id FROM users JOIN comments ON comments.user_id =users.id JOIN posts ON comments.post_id = posts.id WHERE posts.id = $1",
    [id]
  );

module.exports = selectComments;
