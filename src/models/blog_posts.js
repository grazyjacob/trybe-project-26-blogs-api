'use strict';
module.exports = (sequelize, DataTypes) => {
const blogPosts = sequelize.define('BlogPosts', {
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
  return blogPosts;
};