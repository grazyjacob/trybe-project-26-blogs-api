const { createToken } = require('../auth/jwtFunctions');

const { User } = require('../models');

const getByEmail = async (email) => User.findOne({ where: { email } });

const getByPassword = async (password) => User.findOne({ where: { password } });

const checkUser = async (email) => {
  const user = await getByEmail(email);
  // console.log('userLOGINSERVICE', user.dataValues);
  const { password: _password, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { token };
};

module.exports = {
  checkUser,
  getByEmail,
  getByPassword,
};