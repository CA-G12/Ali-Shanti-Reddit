const { signUpSchema, loginSchema, addPostSchema } = require("./validation");
const { generateError } = require("./errors/generateError");

module.exports = { signUpSchema, loginSchema, addPostSchema, generateError };
