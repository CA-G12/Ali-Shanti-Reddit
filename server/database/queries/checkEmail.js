const connections = require('../config/connections');

const checkEmail = (email) => connections.query('SELECT email FROM users WHERE email = $1', [email]);

module.exports = { checkEmail };