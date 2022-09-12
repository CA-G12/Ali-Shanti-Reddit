const { displayPostsOrderByVote } = require("../../database/queries");

const getPostsOrderByVote = (req, res, next) => {
  if (!req.id) return res.status(401).json({ err: "unauthorized" });

  return displayPostsOrderByVote()
    .then((data) => res.status(200).json(data.rows))
    .catch((error) => {
      if (error.status) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = getPostsOrderByVote;
