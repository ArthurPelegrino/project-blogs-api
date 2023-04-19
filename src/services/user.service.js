const { User } = require('../models');

const checkAccount = async (email) => {
console.log(email);
    const login = await User.findOne({
        where: { email },
    });
    console.log('login', login);
    return login;
};

const getUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return users;
};

const generateUser = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });
    console.log(newUser);
  return newUser;
};

const getById = async (id) => {
    // console.log('@#@#$@##@@#@##@#@ id passado na service', id);
        const user = await User.findOne({
            where: { id },
            attributes: { exclude: ['password'] },
        });
        // console.log(user);
        return user;
    };

module.exports = { checkAccount,
generateUser,
getUsers,
getById };