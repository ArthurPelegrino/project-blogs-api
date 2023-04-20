const { getPosts } = require('../services/post.service');

const getAllPosts = async (_req, res) => {
    const posts = await getPosts();
    console.log('@#@#@#@#@#@#@#@# posts', posts);
    return res.status(200).json(posts);
};

module.exports = { getAllPosts };