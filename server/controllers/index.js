const notFoundError = require('./errorHandle/notFoundError');
const serverError = require('./errorHandle/serverError');

const {homePage, loginPage, signupPage, profilePage} = require('./handlePages');

const {handleSignup} = require('./handleSignup');
const {handleLogin} = require('./handleLogin');
const {handleLogout} = require('./handleLogOut');

module.exports = { 
    serverError, 
    notFoundError , 
    homePage, 
    loginPage, 
    signupPage, 
    profilePage,
    handleSignup,
    handleLogin,
    handleLogout
};