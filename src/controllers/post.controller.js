const jwt = require('jsonwebtoken');
const postService = require('../services/postService');
const { Category } = require('../models');

require('dotenv/config');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const resolve = categoryIds.map((categoryId) => Category.findByPk(categoryId));
    const categories = await Promise.all(resolve);
    const check = categories.some((category) => category === null);
    if (check) { 
      return res.status(400).json({
      message: 'one or more "categoryIds" not found' });
    }
        const result = await postService.createAPost({ id, title, content, categoryIds });
        return res.status(201).json(result);
};

const getAllPosts = async (_req, res) => {
  const result = await postService.getAllPost();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await postService.getOneById(id);
  if (result) return res.status(200).json(result);
  return res.status(404).json({ message: 'Post does not exist' });
};

const verifyPost = async (id) => {
  const result = await postService.getOneById(id);
  if (result) { 
    const ID = result.dataValues.userId;
    return { userId: ID, type: null };
  }
  return { message: 'não existe', type: 'error' };
};

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const tokenId = async (req, _res) => {
  const token = req.header('Authorization');
  const { id } = req.params;
    const decoded = jwt.verify(token, secret);
  const { userId } = await verifyPost(id);
    if (Number(decoded.data.id) === Number(userId)) return true;
    return false;
};

const updatePostById = async (req, res) => {
  const tokenIdVerific = await tokenId(req, res);
  const { title, content } = req.body;
  if (!title || !content) res.status(400).json({ message: 'Some required fields are missing' });
  const { id } = req.params;
  if (tokenIdVerific) {
      await postService.updatePost({ id, title, content });
      const post = await postService.getOneById(id);

      return res.status(200).json(post);
  } 
  return res.status(401).json({ message: 'Unauthorized user' });
  };

module.exports = {
  createPost,
  getAllPosts,
  getById,
  updatePostById,
};