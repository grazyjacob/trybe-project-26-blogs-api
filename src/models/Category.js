module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    name: DataTypes.STRING,
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'categories',
    underscored: true,
  });

  return categories;
};