const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
 //setting up schema

 const BuyerSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

 });


 // Export Buyer Model

 module.exports = mongoose.model('Buyer', BuyerSchema);

 module.exports.get = (callback, limit) => {
     Buyer.find(callback).limit(limit);
 }