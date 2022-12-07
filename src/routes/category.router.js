const express = require('express');
const categoryController = require('../controllers/category.controller');
const validateToken = require('../middlewares/validate.token');

const router = express.Router();

router.post('/categories', validateToken, categoryController.postCategories);
router.get('/categories', validateToken, categoryController.getCategories);

module.exports = router;