const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { checkUserQuery } = require("../../database/queries");
const { loginSchema, generateError } = require("../../utils");

const login = (req, res, next) => {
  const { password } = req.body;
  loginSchema
    .validateAsync(req.body)
    .then(({ email }) => checkUserQuery(email))
    .then((data) => {
      if (data.rows.length === 0)
        throw generateError({ msg: "email does not exist ", status: 400 });
      else {
        return bcrypt
          .compare(password, data.rows[0].password)
          .then((isMatch) => {
            if (isMatch) {
              sign(
                { id: data.rows[0].id },
                process.env.SECRET_KEY,
                (error, token) => {
                  if (error)
                    throw generateError({
                      msg: "Hash Function Error",
                      status: 400,
                    });
                  return res
                    .status(200)
                    .cookie("token", token)
                    .cookie("userName", data.rows[0].name)
                    .json({ message: "Log in successfully" });
                }
              );
            } else {
              throw generateError({
                msg: "error in password or email",
                status: 400,
              });
            }
          });
      }
    })
    .catch((error) => {
      if (error.status) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = login;
