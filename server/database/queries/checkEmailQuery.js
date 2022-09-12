const connection = require("../config/connection");

const checkEmailQuery = (email) =>
  connection.query("SELECT email FROM users WHERE email = $1", [email]);

module.exports = checkEmailQuery;
