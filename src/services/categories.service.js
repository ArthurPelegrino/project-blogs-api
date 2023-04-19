const { Category } = require('../models');

// const generateCategory = async (name) => {
//     console.log('&$*#$&#$*$##$$#$##', name);
//     const newCategory = await Category.create({ name });
//     return newCategory;
// };

const generateCategory = async (name) => {
    const newCategory = await Category.create(name);
  return newCategory;
};

const getAllCategories = async () => {
  const categories = Category.findAll();
  return categories;
};
module.exports = { generateCategory, getAllCategories };