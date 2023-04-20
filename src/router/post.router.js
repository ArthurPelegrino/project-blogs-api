const postRouter = require('express').Router();
const { authToken } = require('../middlewares/validations');
const { getAllPosts } = require('../controllers/post.controller');

postRouter.get('/', authToken, getAllPosts);

module.exports = postRouter;