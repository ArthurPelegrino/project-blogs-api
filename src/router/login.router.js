const loginRouter = require('express').Router();
const loginController = require('../controllers/login.controller');
const checkFields = require('../middlewares/validations');

loginRouter.post('/', checkFields, loginController.singIn);

module.exports = loginRouter;