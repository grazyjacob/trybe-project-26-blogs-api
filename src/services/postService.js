const { BlogPost, User, Category, PostCategory } = require('../models');

const createAPost = async ({ id, title, content, categoryIds }) => {
const date = new Date();
 const post = await BlogPost
 .create({ userId: id, title, content, categoryIds, published: date, updated: date });
 await PostCategory
 .bulkCreate(categoryIds.map((categoryId) => ({ categoryId, postId: post.id })));  
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

const updatePost = async ({ id, title, content }) => {
 const result = await BlogPost.update({ title, content }, 
{ where: { id } });
 return result;
};

module.exports = {
    createAPost,
    getAllPost,
    getOneById,
    updatePost,
};
