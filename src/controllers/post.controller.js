const jwt = require('jsonwebtoken');
const postService = require('../services/postService');
require('dotenv/config');

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

const verifyPost = async (id) => {
  const result = await postService.getOneById(id);
  if (result) { 
    const { email } = result.user.dataValues.email;
    return { email, type: null };
  }
  return { message: 'não existe', type: 'error' };
};

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const tokenId = async (req, _res) => {
  const token = req.header('Authorization');
  const { id } = req.params;
    const decoded = jwt.verify(token, secret);
    // const tokenUserId = decoded.data.id;
  const { email } = await verifyPost(id);
  console.log('TOKEN ID', decoded);
    if (Number(decoded.userId) === email) return true;
    return false;
};

// a ideia é pegar o id do token e comparar com esse id que está no post buscado
const updatePostById = async (req, res) => {
  const tokenIdVerific = await tokenId(req, res);
  const { title, content } = req.body;
  if (!title || !content) res.status(400).json({ message: 'Some required fields are missing' });
  const { id } = req.params;
  console.log('antes do if', id, tokenIdVerific);
  if (tokenIdVerific) {
    console.log('ENTROU NO IF VERIFICATION ID', tokenIdVerific);
    // if (verification.type === 'error') return res.status(401).json({ messsage: 'deu ruim' });
      const result = await postService.updatePost({ id, title, content });
      return res.status(200).json(result);
  } 
  console.log('depois do if', id);
  return res.status(401).json({ message: 'Unauthorized user' });
  };

module.exports = {
  createPost,
  getAllPosts,
  getById,
  updatePostById,
};