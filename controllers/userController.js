const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name!').notEmpty();
    req.checkBody('email', 'That Email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'password cannot be blank').notEmpty();
    req.checkBody('password-confirm', 'Confirm password cannot be blank').notEmpty();
    req.checkBody('password-confirm', 'passwords do not match'
    ).equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) {
        res.json(errors);
    }

    next()
};

exports.register = async (req, res, next) => {
    const user = new User({ email: req.body.email, name: req.body.name });
    const register = promisify(User.register, User);
    const newUser = await register(user, req.body.password);
    res.json(newUser);
}

exports.login = (req, res, next) => {
    res.status(200).json(req.user);
    return next();
}