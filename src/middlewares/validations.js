function validateEmail(email) {
    // expressão regular para validar o formato do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // retorna true se o e-mail é válido, caso contrário retorna false
    return regex.test(email);
  }

const checkFields = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const checkDisplayName = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400).json({
             message: '"displayName" length must be at least 8 characters long' });
    }
    next();
};

const checkEmail = async (req, res, next) => {
    const { email } = req.body;
    const hasEmail = validateEmail(email);

    if (hasEmail === false) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
};

const checkPassword = async (req, res, next) => {
    const { password } = req.body;

    if (password.length < 6) {
        return res.status(400).json({
             message: '"password" length must be at least 6 characters long', 
            });
    }

    next();
};

// const check4 = async (req, res, next) => {};

module.exports = {
    checkFields,
    checkDisplayName,
    checkEmail,
    checkPassword,
};