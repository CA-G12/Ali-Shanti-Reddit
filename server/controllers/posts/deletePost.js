const { deletePostQuery } = require("../../database/queries");

const deletePost = (req, res, next) => {
  const { id } = req.params;
  return deletePostQuery(id)
    .then(() => res.status(202).json({ msg: "post Deleted Successfully" }))
    .catch((error) => {
      if (error.status) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = deletePost;
