const loginService = require('../services/login.service');
const { generateToken } = require('../utils/auth');

const singIn = async (req, res) => {
    const { email } = req.body;

    const login = await loginService.checkAccount(email);
    if (!login) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    console.log('#@#@#@##@#@#@@#@##@#@#', login.dataValues);
    const token = generateToken(login.dataValues);

    return res.status(200).json({ token });
};

module.exports = {
    singIn,
};