const categoriesRouter = require('express').Router();
const { addCategorie, getCategories } = require('../controllers/categories.controller');
const { authToken, checkNewCategorie } = require('../middlewares/validations');

categoriesRouter.post('/', checkNewCategorie, authToken, addCategorie);
categoriesRouter.get('/', authToken, getCategories);

module.exports = categoriesRouter;