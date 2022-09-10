const connections = require('../config/connection');

const getPassword = (email) => connections.query('SELECT password FROM Users WHERE email = $1', [email]);

module.exports = { getPassword };