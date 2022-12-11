const express = require('express');
const postController = require('../controllers/post.controller');
const validateToken = require('../middlewares/validate.token');

const router = express.Router();

router.post('/post', postController.createPost);
router.get('/post', validateToken, postController.getAllPosts);

module.exports = router;