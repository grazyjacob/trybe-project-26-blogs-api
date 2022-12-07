const { Category } = require('../models');

const postCategory = async ({ name }) => {
    const result = await Category.create({ name });
    return result;
};

const getByName = async (name) => Category.findOne({ where: { name } });

const getCategory = async () => Category.findAll();

module.exports = {
    postCategory,
    getByName,
    getCategory,
};