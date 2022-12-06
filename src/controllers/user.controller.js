const UserService = require('../services/userService');

const verify = async ({ displayName, email, password }) => {
    const REGEX_EMAIL = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    if (displayName.length < 8) {
        return { message: '"displayName" length must be at least 8 characters long', type: 400 };
    } if (!REGEX_EMAIL.test(email)) {
        return {
            message: '"email" must be a valid email', type: 400,
          };
    } if (password.length < 6) {
        return {
            message: '"password" length must be at least 6 characters long', type: 400,
          };
    }
    return { message: 'OK', type: null };
};

const postUser = async (req, res) => {
    const { displayName, email, password } = req.body;
    const byEmail = await UserService.getByEmail(email);
    if (byEmail) {
        return res.status(409).json({
            message: 'User already registered',
          }); 
        }
        const verifyFields = await verify({ displayName, email, password });
        if (verifyFields.type) {
            return res.status(400).json({ message: verifyFields.message });
        }
        const { token } = await UserService.createUser({ displayName, email, password });
        return res.status(201).json({ token });
};

const getUser = async (_req, res) => {
    const users = await UserService.getUsers();
    res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await UserService.getByUserId(id);
    if (user) return res.status(200).json(user);
    return res.status(404).json({ message: 'User does not exist' });
};

module.exports = {
    postUser,
    getUser,
    getUserById,
};