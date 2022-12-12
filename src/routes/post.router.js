const express = require('express');
const postController = require('../controllers/post.controller');
const validateToken = require('../middlewares/validate.token');

const router = express.Router();

router.post('/post', validateToken, postController.createPost);
router.get('/post', validateToken, postController.getAllPosts);
router.get('/post/:id', validateToken, postController.getById);

module.exports = router;