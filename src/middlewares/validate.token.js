// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const { data } = jwt.verify(token, secret);
        req.user = data;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }
};