const express = require('express');
const { notFoundError, serverError } = require('../controllers');

const router = express.Router();

router.use(notFoundError);
router.use(serverError);

const { handleSignup } = require('../controllers/index');

router.post('/signup', handleSignup);

module.exports = router;