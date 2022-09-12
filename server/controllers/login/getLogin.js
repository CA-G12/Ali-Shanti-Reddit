const { join } = require("path");

const getLogin = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "login.html")
  );
};

module.exports = getLogin;
