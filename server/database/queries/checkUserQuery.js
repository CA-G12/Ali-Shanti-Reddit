const connection = require("../config/connection");

const checkUserQuery = (email) =>
  connection.query("SELECT * FROM users WHERE email = $1 ", [email]);

module.exports = checkUserQuery;
