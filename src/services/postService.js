const { BlogPost, User } = require('../models');

const createAPost = async ({ title, content, categoryIds }) => {
 const post = await BlogPost.create({ title, content, categoryIds });
 return post;
};

const getAllPost = async () => {
 const result = await BlogPost.findAll({ raw: true,
    include: [{
     model: User,
     as: 'user',
}],
});
 return result;
};

module.exports = {
    createAPost,
    getAllPost,
};