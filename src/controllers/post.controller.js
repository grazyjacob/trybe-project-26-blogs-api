const postService = require('../services/postService');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
        const result = await postService.createAPost({ title, content, categoryIds });
        return res.status(201).json(result);
};

const getAllPosts = async (_req, res) => {
  const result = await postService.getAllPost();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await postService.getOneById(id);
  console.log('CONTROLLER GET BY ID', result);
  if (result) return res.status(200).json(result);
  return res.status(404).json({ message: 'Post does not exist' });
};

module.exports = {
  createPost,
  getAllPosts,
  getById,
};