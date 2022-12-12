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
  if (result) return res.status(200).json(result);
  return res.status(404).json({ message: 'Post does not exist' });
};

const updatePostById = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const result = await postService.updatePost({ id, title, content });
  if (result) return res.status(200).json(result);
  return res.status(401).json(result);
};

module.exports = {
  createPost,
  getAllPosts,
  getById,
  updatePostById,
};