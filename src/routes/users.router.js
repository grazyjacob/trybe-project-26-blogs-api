const express = require('express');
const userController = require('../controllers/user.controller');
const validateToken = require('../middlewares/validate.token');

const router = express.Router();

router.post('/user', userController.postUser);
router.get('/user', validateToken, userController.getUser);

module.exports = router;