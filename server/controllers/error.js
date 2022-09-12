const { join } = require("path");

const pageNotPage = (req, res, next) => {
  res
    .status(404)
    .sendFile(join(__dirname, "..", "..", "public", "html", "404.html"));
};

const serverError = (err, req, res, next) => {
  if (err.status) {
    res.json({ message: err.message, status: err.status });
  } else {
    res
      .status(500)
      .sendFile(join(__dirname, "..", "..", "public", "html", "500.html"));
  }
};

module.exports = { pageNotPage, serverError };
