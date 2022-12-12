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

module.exports = {
    createAPost,
    getAllPost,
};
