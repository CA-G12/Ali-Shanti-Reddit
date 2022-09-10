const { join } = require('path');

const homePage = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
const loginPage = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'assets' ,'html ', 'login.html'));
const signupPage = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'assets' ,'html', 'signup.html'));
const profilePage = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'assets' ,'html', 'person.html'));

module.exports = {
  homePage, loginPage, signupPage, profilePage,
};