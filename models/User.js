const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const md5 = require("md5");
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

// User schema

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please Supply an email address'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String
    }

})

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
userSchema.plugin(mongodbErrorHandler);
module.exports = mongoose.model('User', userSchema);