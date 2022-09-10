const connections = require('../config/connection');

const checkEmail = (email) => connections.query('SELECT email FROM Users WHERE email = $1', [email]);

module.exports = { checkEmail };