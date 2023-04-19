const { User } = require('../models');

// const teste = async () => {
//     const teste2 = await User.findAll();
//     console.log(teste2);
// };

// teste();

const checkAccount = async (email) => {
    console.log(email);
    const login = await User.findOne({
        where: { email },
        attributes: { exclude: ['password'] },
    });
    console.log('login', login);
    return login;
};

module.exports = {
    checkAccount,
};