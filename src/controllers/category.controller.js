const categoryService = require('../services/categoryService');

const postCategories = async (req, res) => {
  const { name } = req.body;
  if (!name) {
      return res.status(400).json({ message: '"name" is required' });
  }
  const byName = await categoryService.getByName(name);
  if (byName) return res.status(404).json({ message: 'category already registered' });
  const result = await categoryService.postCategory({ name });
  return res.status(201).json(result);
};

const getCategories = async (_req, res) => {
  const categories = await categoryService.getCategory();
  return res.status(200).json(categories);
};

module.exports = {
    postCategories,
    getCategories,
};