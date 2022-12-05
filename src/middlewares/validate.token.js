// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

require('dotenv/config');
const UserService = require('../services/userService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const decoded = jwt.verify(token, secret);
        console.log('DECODED', decoded);
        const user = await UserService.getByUserId(decoded.data.id);
        if (!user) {
            return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }
};