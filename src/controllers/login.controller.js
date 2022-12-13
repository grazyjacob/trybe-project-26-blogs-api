const UserService = require('../services/loginService');
// const { User } = require('../models');
const { createToken } = require('../auth/jwtFunctions');

require('dotenv/config');

const verify = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || email.length < 1 || password.length < 1) {
    return res.status(400).json({
    message: 'Some required fields are missing',
  });
}
return null;
};

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const verifyFields = await verify(req, res);
    const byEmail = await UserService.getByEmail(email);
    if (verifyFields) return verifyFields;
    const byPassword = await UserService.getByPassword(password);
    if (byEmail === null || byPassword === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    console.log('POST LOGIN CONTROLLER', byEmail.displayName);
    const user = [byEmail.displayName, byEmail.email, byEmail.image]; 
    const token = createToken(user);
      return res
      .status(200)
      .json({ token });
};

module.exports = {
    postLogin,
};