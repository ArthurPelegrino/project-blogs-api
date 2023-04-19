// const userService = require('../services/user.service');
const { checkAccount, generateUser, getUsers, getById } = require('../services/user.service');
const { generateToken } = require('../utils/auth');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const checkEmail = await checkAccount(email);
    if (checkEmail) {
        return res.status(409).json({ message: 'User already registered' });
    }
    // console.log('checkEmail', checkEmail);

    const token = generateToken(password);

    await generateUser(displayName, email, password, image);

    return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
        const users = await getUsers();
        return res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    // console.log('#@#@#@#@#@# id que está chegando na controller', req);
    const user = await getById(id);
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById };