const connections = require('../config/connections');

const getPassword = (email) => connections.query('SELECT password FROM users WHERE email = $1', [email]);

module.exports = { getPassword };