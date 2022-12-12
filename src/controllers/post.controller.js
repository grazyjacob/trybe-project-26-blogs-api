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

module.exports = {
  createPost,
  getAllPosts,
};