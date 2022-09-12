const { selectComments } = require("../../database/queries");

const getAllComments = (req, res, next) => {
  const { id } = req.params;
  selectComments(id)
    .then((data) => res.status(201).json(data.rows))
    .catch((error) => {
      if (error.status) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = getAllComments;
