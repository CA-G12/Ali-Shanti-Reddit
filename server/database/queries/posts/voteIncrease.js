const connection = require("../../config/connection");

const voteIncrease = (id) =>
  connection.query(
    "UPDATE posts SET vote = vote + 1 WHERE id = $1 RETURNING*",
    [id]
  );

module.exports = voteIncrease;
