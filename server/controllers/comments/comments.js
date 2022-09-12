const { join } = require("path");

const comments = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "comments.html")
  );
};

module.exports = comments;
