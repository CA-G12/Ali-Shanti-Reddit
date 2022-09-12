const { join } = require("path");

const getProfile = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "profile.html")
  );
};

module.exports = getProfile;
