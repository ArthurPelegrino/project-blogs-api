// const userService = require('../services/user.service');
const { checkAccount, generateUser, getUsers } = require('../services/user.service');
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

const getAllUsers = async (req, res) => {
        const users = await getUsers();
        return res.status(200).json(users);
};

module.exports = {
    createUser,
    getAllUsers };