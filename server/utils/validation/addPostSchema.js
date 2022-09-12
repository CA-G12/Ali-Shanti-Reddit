const joi = require("joi");

const addPostSchema = joi.object({
  title: joi.string().required(),
  post: joi.string().required(),
  vote: joi.number(),
  user_id: joi.number(),
});

module.exports = { addPostSchema };
