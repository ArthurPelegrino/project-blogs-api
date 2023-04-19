const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const configJWT = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

const generateToken = (payload) => {
    const token = jwt.sign({ payload }, secretKey, configJWT);
    return token;
};

const validateToken = (token) => {
    if (!token) return 'Token not found';
    const isValid = jwt.verify(token, secretKey);
    return isValid;
};

module.exports = {
    generateToken,
    validateToken,
};