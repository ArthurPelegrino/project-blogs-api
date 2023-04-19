const userRouter = require('express').Router();
const createUser = require('../controllers/user.controller');
const {
    checkDisplayName,
    checkEmail,
    checkPassword } = require('../middlewares/validations');

userRouter.post(
'/', 
checkDisplayName,
checkEmail,
checkPassword,
createUser,
);

module.exports = userRouter;