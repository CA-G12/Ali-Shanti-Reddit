const connection = require("../../config/connection");

const voteDecrease = (id) =>
  connection.query(
    "UPDATE posts SET vote = vote - 1 WHERE id = $1 RETURNING*",
    [id]
  );

module.exports = voteDecrease;
