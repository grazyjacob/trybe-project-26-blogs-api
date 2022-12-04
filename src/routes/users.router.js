const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/user', userController.postUser);

module.exports = router;