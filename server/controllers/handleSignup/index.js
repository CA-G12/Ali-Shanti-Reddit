require('env2')('.env');
const { hash } = require('bcryptjs');
const { signupQuery, checkEmail } = require('../../database/queries');
const { signup, GenerateError, signInPromise } = require('../../utils');

const handleSignup = (req, res, next) => {
  const { email, name, password } = req.body;
  signup
    .validateAsync(req.body)
    .then((data) => checkEmail(data.email))
    .then((data) => {
        if (data.rows.length == 0) {
        return hash(password, 10);
    } else {
        throw GenerateError('The email is already exist', 400);
      }
    })
    .then((password) => signupQuery({ email, name, password }))
    .then(() => {
      return signInPromise(email);
    })
    .then((token) => {
      res.cookie('access_token', token, {
            maxAge: 2592000000,
            httpOnly: true,
          })
          .json({ message: 'done' });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(GenerateError('Validation failed', 400));
      } else {
        next(err);
      }
    });
};
module.exports = { handleSignup };