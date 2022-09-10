const connections = require('../config/connections');

const signupQuery = ({username,email,password }) => connections.query('INSERT INTO users (username, email, password) VALUES ($1,$2,$3)', [username,email,password]);
module.exports = { signupQuery };