const { User } = require('../models');

const checkAccount = async (email) => {
    const login = await User.findOne({
        where: { email },
        attributes: { exclude: ['password'] },
    });
    return login;
};

module.exports = {
    checkAccount,
};