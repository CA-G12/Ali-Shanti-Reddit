const {signup} = require('./validation/singup');
const { GenerateError } = require('./GenerateError');
const { signInPromise } = require('./signInPromise');
const {login} = require('./validation/login')

module.exports = {signup, GenerateError, signInPromise,login};