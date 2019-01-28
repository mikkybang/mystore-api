const mongoose = require('mongoose');
const User = mongoose.model('User');
const Seller = mongoose.model('Seller');
const Buyer = mongoose.model('Buyer');
const passport = require('passport');



exports.getusers = async (req, res) => {
    const user = await User.find()
    res.json(user);
}

exports.getuserByEmail = async (req, res) => {
    const user = await User.findOne({email: req.params.email})
    res.json(user);
}


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
    req.checkBody('password_confirm', 'Confirm password cannot be blank').notEmpty();
    req.checkBody('password_confirm', 'passwords do not match'
    ).equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) {
        console.log(errors)
        res.status(400).json(errors);
        return false
    }
    next()
};
