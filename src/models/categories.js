module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define( 'Categories', {
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
    underscored: true,
  });
  return categories;
};