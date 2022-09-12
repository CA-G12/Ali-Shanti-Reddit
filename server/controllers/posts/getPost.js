const { join } = require("path");

const getPost = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "posts.html")
  );
};

module.exports = getPost;
