const { BlogPost, User, Category } = require('../models');

const createAPost = async ({ title, content, categoryIds }) => {
 const post = await BlogPost.create({ title, content, categoryIds });
 return post;
};

const getAllPost = async () => {
 const result = await BlogPost.findAll({
    include: [{
     model: User,
     as: 'user',
     attributes: { exclude: ['password'] },
}, { model: Category, as: 'categories', through: { attributes: [] } }],
});
 return result;
};

const getOneById = async (id) => {
 const result = await BlogPost.findByPk(id, {
    include: [{
     model: User,
     as: 'user',
     attributes: { exclude: ['password'] },
}, { model: Category, as: 'categories', through: { attributes: [] } }],
});
 return result;
};

const updatePost = async (id, title, content) => {
 const result = await BlogPost.update({ title, content }, { where: { id } },
    { include: [{
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
}, { model: Category, as: 'categories', through: { attributes: [] } }],
});
 return result;
};

module.exports = {
    createAPost,
    getAllPost,
    getOneById,
    updatePost,
};
