const { displayPostsById } = require("../../database/queries");

const getAllPostsById = (req, res, next) => {
  const { id } = req.params;
  displayPostsById(id)
    .then((data) => res.status(200).json(data.rows))
    .catch((error) => {
      if (error.status) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = getAllPostsById;
