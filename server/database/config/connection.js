require("dotenv").config();
const { Pool } = require("pg");

let DB_URL = "";
let sslConnection;

if (process.env.NODE_ENV === "test") {
  DB_URL = process.env.DB_URL_TEST;
} else if (process.env.NODE_ENV === "dev") {
  DB_URL = process.env.DB_URL;
} else if (process.env.NODE_ENV === "production") {
  DB_URL = process.env.DATABASE_URL;
} else throw new Error("NO DB_URL");

const connection = new Pool({
  connectionString: DB_URL,
  ssl: sslConnection,
});

module.exports = connection;
