const { createToken } = require('../auth/jwtFunctions');

const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  const { password: _password, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { token };
};

const getByEmail = async (email) => User.findOne({ where: { email } });

module.exports = {
 createUser,
 getByEmail,
};