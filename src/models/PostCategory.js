module.exports = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, field: 'post_id', foreignKey: true },
    categoryId: {type: DataTypes.INTEGER, field: 'category_id', foreignKey: true }
  }, {
    sequelize,
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });
  postsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: postsCategories,
      foreignKey: 'postId' ,
      otherKey: 'categoryId',
      as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: postsCategories,
      foreignKey:  'categoryId',
      otherKey: 'postId',
      as: 'blog_posts',
    })   
  }
  return postsCategories;
};
