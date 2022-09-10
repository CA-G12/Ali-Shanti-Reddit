const express = require('express');
const { notFoundError, serverError } = require('../controllers');

const router = express.Router();

router.use(notFoundError);
router.use(serverError);

const { handleSignup, handleLogin } = require('../controllers/index');

router.post('/signup', handleSignup);
router.post('/login', handleLogin);

module.exports = router;