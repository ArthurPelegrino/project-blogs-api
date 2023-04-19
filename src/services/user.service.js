const { User } = require('../models');

const checkAccount = async (email) => {
    console.log(email);
    const login = await User.findOne({
        where: { email },
    });
    console.log('login', login);
    return login;
};

const generateUser = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });
    console.log(newUser);
  return newUser;
};

module.exports = { checkAccount,
generateUser };