const UserService = require('../services/loginService');
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
    if (verifyFields) return verifyFields;
    const byPassword = await UserService.getByPassword(password);
    const byEmail = await UserService.getByEmail(email);
    if (byEmail === null || byPassword === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
      const { token } = await UserService.createUser(email, password);
      return res
      .status(200)
      .json({ token });
};

module.exports = {
    postLogin,
};