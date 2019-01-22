const mongoose = require('mongoose');
const User = mongoose.model('User');
const Seller = mongoose.model('Seller');
const Buyer = mongoose.model('Buyer');


exports.getusers = async (req, res) => {
    const user = await User.find()
     res.json(user);
}

exports.getusers = async (req, res) => {
    const user = await User.find()
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
    const user = new User({email: req.body.email, name: req.body.name, type: req.body.type });
    await User.register(user, req.body.password).then(
       async (user) =>{
        if (req.body.type == 'Buyer') {
            const buyer =  await new Buyer({user: user._id, email: user.email, name: user.name})  
            buyer.save();
            res.json(buyer);
          }
          else {
              const seller = await new Seller({user: user._id, email: user.email, name: user.name})
              seller.save();
              res.json(seller);
          }

       }
    )
    
    
}

exports.login = (req, res, next) => {
    console.log(req.user)
    res.status(200).json(req.user);
    return next();
}