const { User } = require('../models');

// const teste = async () => {
//     const teste2 = await User.findAll();
//     console.log(teste2);
// };

// teste();

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