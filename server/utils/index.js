const {signup } = require('./validation/signup');
const { manyErrors } = require('./GenerateError');
const { signInPromise } = require('./signPromise');

module.exports = {signup , manyErrors, signInPromise};