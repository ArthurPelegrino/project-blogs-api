const { BlogPost, User, Category } = require('../models');

const getPosts = async () => {
    const users = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
   { model: Category, as: 'categories' }],
    });
    return users;
};

module.exports = { getPosts };