'use strict';
module.exports = (sequelize, DataTypes) => {
 const user = sequelize.define('User', {
    displayName: DataTypes.STRING,
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};