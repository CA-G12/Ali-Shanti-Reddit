const { getPosts } = require("../../database/queries");

const displayPost = (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  getPosts(id)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
};

module.exports = displayPost;
