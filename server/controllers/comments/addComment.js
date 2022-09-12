const { insertComment } = require("../../database/queries");

const addComment = (req, res, next) => {
  const { textarea, userId } = req.body;
  const { id } = req.params;
  insertComment(textarea, id, userId)
    .then((data) => console.log(data.rows))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = addComment;
