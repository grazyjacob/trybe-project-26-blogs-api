'use strict';
module.exports = (sequelize, DataTypes) => {
const blogPosts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER,  allowNull: false, field: 'user_id'  },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'blog_posts',
    underscored: true,
  });
  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, {
      foreignKey: { name: 'userId', field: 'user_id' }, as: 'users'
    })
  }

  return blogPosts;
};