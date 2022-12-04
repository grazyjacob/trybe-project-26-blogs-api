const { createToken } = require('../auth/jwtFunctions');

const { User } = require('../models');

const createUser = async ({ email, password }) => {
  const user = await User.create({ email, password });
  const { password: _password, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { token };
};

const getByEmail = async (email) => User.findOne({ where: { email } });

const getByPassword = async (password) => User.findOne({ where: { password } });

module.exports = {
  createUser,
  getByEmail,
  getByPassword,
};