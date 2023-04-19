const userRouter = require('express').Router();
const { createUser, getAllUsers, getUserById } = require('../controllers/user.controller');
const {
    checkDisplayName,
    checkEmail,
    checkPassword,
    authToken } = require('../middlewares/validations');

userRouter.post(
'/', 
checkDisplayName,
checkEmail,
checkPassword,
createUser,
);

userRouter.get('/', authToken, getAllUsers);
userRouter.get('/:id', authToken, getUserById);

module.exports = userRouter;