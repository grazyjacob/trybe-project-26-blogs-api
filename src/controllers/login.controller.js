const LoginService = require('../services/loginService');
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
    const isEmptyFields = await verify(req, res);
    if (isEmptyFields) return isEmptyFields;
    const byPassword = await LoginService.getByPassword(password);
    const byEmail = await LoginService.getByEmail(email);
    if (byEmail === null || byPassword === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
      const { token } = await LoginService.checkUser(email);
      return res
      .status(200)
      .json({ token });
};

module.exports = {
    postLogin,
};