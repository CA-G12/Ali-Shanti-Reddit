const { Pool } = require('pg');
require('env2')('.env');

let DB_URL = '';

if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.DB_URL_TEST;
} else if (process.env.NODE_ENV === 'dev') {
  DB_URL = process.env.DB_URL;
} else if (process.env.NODE_ENV === 'production') {
  DB_URL = process.env.DATABASE;
} else throw new Error('NO DB_URL');

const connection = {
  connectionString: DB_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

module.exports = new Pool(connection);