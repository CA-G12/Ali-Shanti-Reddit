const Joi =  require('joi');
const signup= Joi.object({
    email : Joi.string().required(),
    name : Joi.string().required(),
    password : Joi.string().required().pattern(/^[a-zA-Z0-9]{5,30}$/),
});
module.exports = {signup}; 