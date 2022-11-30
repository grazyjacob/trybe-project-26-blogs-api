'use strict';
module.exports = (sequelize, DataTypes) => {
const blog_posts = sequelize.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'blog_posts',
    underscored: true,
  });
  return blog_posts;
};