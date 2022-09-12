const { insertPostQuery } = require("../../database/queries");
const { addPostSchema } = require("../../utils");

const addPost = (req, res, next) => {
  addPostSchema.validateAsync(req.body).then((value) => {
    const { title, post } = value;
    const userId = req.id;
    insertPostQuery(title, post, userId)
      .then(() => {
        res.status(201).json({ message: "post created" });
      })
      .catch((error) => {
        console.log(error);
        if (error.status) return res.status(error.status).json(error.message);
        next();
      });
  });
};

module.exports = addPost;
