const Joi =  require('joi');
const login= Joi.object({
    email : Joi.string().required(),
    password : Joi.string().required().pattern(/^[a-zA-Z0-9]{5,30}$/),
});
module.exports = {login}; 