module.exports = (sequelize, DataTypes) => {
 const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });
  return User;
};