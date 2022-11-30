'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts_categories = sequelize.init({
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posts_categories',
    underscored: true,
  });
  return posts_categories;
};