'use strict';
module.exports = (sequelize, DataTypes) => {
 const user = sequelize.define('User', {
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};