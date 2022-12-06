module.exports = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, field: 'post_id' },
    categoryId: {type: DataTypes.INTEGER, field: 'category_id' }
  }, {
    sequelize,
    modelName: 'posts_categories',
    underscored: true,
  });
  postsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: postsCategories,
      foreignKey: { name: 'postId', field: 'post_id'},
      otherKey: { name: 'categoryId', field: 'category_id'},
      as: 'Category',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: postsCategories,
      foreignKey: { name: 'categoryId', field: 'category_id'},
      otherKey: { name: 'postId', field: 'post_id'},
      as: 'BlogPost',
    })   
  }

  return postsCategories;
};