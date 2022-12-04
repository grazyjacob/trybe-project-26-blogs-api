module.exports = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories', {
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posts_categories',
    underscored: true,
  });
  return postsCategories;
};