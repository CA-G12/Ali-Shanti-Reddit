const routerPages = require('express').Router();
const {
    homePage, loginPage, signupPage, profilePage,
} = require('../controllers/index');

routerPages.get('/home', homePage);
routerPages.get('/login', loginPage);
routerPages.get('/signup', signupPage);
routerPages.get('/profile', profilePage);

module.exports = routerPages;