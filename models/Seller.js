const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// setting up schema


const SellerSchema = mongoose.Schema({
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
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }

});
// Was thinking of adding an image schema don't know what you think , hit me up once you read the code

// export Seller Model

module.exports = mongoose.model('Seller', SellerSchema);

module.exports.get = (callback, limit) => {
    Seller.find(callback).limit(limit);
}