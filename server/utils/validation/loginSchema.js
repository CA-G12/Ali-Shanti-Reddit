const joi = require("joi");

const loginSchema = joi.object({
  email: joi.string().required(),
  password: joi
    .string()
    .min(5)
    .regex(/[A-z0-9]{6,}/)
    .required(),
});

module.exports = { loginSchema };
