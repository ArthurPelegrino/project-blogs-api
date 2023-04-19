const { generateCategory, getAllCategories } = require('../services/categories.service');

const addCategorie = async (req, res) => {
    const { name } = req.body;
    const newCategorie = await generateCategory({ name });
    return res.status(201).json(newCategorie);
};

const getCategories = async (_req, res) => {
    const categories = await getAllCategories();
    return res.status(200).json(categories);
};

module.exports = { addCategorie, getCategories };