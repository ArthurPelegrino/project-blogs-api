// const userService = require('../services/user.service');
const { checkAccount, generateUser } = require('../services/user.service');
const { generateToken } = require('../utils/auth');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const checkEmail = await checkAccount(email);
    if (checkEmail) {
        return res.status(409).json({ message: 'User already registered' });
    }
    console.log('checkEmail', checkEmail);

    const token = generateToken(password);

    await generateUser(displayName, email, password, image);

    return res.status(201).json({ token });
};

module.exports = createUser;