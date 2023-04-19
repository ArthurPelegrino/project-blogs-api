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

const validateToken = (authorization) => {
    const isValid = jwt.verify(authorization, secretKey);
    return isValid;
};

module.exports = {
    generateToken,
    validateToken,
};