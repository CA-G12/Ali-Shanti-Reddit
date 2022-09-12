const { sign } = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { signUpSchema, generateError } = require("../../utils");
const { addUserQuery, checkEmailQuery } = require("../../database/queries");

const signUp = (req, res, next) => {
  signUpSchema
    .validateAsync(req.body)
    .then((value) => checkEmailQuery(value.email))
    .then((data) => {
      if (data.rowCount)
        throw generateError({
          msg: "email is used try another one ",
          status: 400,
        });
      else {
        return bcrypt.hash(req.body.password, 10);
      }
    })
    .then((hashedPassword) =>
      addUserQuery(req.body.userName, req.body.email, hashedPassword)
    )
    .then(({ rows }) => {
      sign({ id: rows[0].id }, process.env.SECRET_KEY, (error, token) => {
        if (error)
          throw generateError({ msg: "Hash Function Error", status: 400 });
        res.cookie("userName", rows[0].name);
        res
          .status(201)
          .cookie("token", token)
          .json({ message: "Sign in successfully" });
      });
    })

    .catch((error) => {
      next(res.status(error.status).json(error.message));
    });
};
module.exports = signUp;
