const { displayAllPostsQuery } = require("../../database/queries");

const getAllPosts = (req, res, next) => {
  displayAllPostsQuery()
    .then((data) => res.status(200).json(data.rows))
    .catch((error) => {
      if (error.status) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = getAllPosts;
