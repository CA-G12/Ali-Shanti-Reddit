const express = require('express');
const { notFoundError, serverError } = require('../controllers');

const router = express.Router();

router.use(notFoundError);
router.use(serverError);

const { handleSignup , handleLogin , handleLogout} = require('../controllers/index');

router.post('/signup', handleSignup);
router.post('/login', handleLogin);
router.post('/logout', handleLogout);

module.exports = router;