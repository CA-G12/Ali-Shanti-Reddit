require("dotenv").config();
const { join } = require("path");
const express = require("express");
const compression = require("compression");
const cookiParsar = require("cookie-parser");
const router = require("./routes");
const { pageNotPage, serverError } = require("./controllers/index");

const app = express();

app.use(cookiParsar());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ urlencoded: false }));
app.use(express.static(join(__dirname, "..", "public")));

app.set("port", process.env.PORT || 4000);

app.use(router);
app.use(pageNotPage);
app.use(serverError);

module.exports = app;
