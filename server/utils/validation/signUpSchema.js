const joi = require("joi");

const signUpSchema = joi.object({
  email: joi.string().required(),
  userName: joi.string().alphanum().required(),
  password: joi
    .string()
    .min(5)
    .regex(/[A-z0-9]{6,}/)
    .required(),
});

module.exports = { signUpSchema };
