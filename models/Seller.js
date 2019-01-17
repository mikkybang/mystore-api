const mongoose = require('mongoose');

// setting up schema


const SellerSchema = mongoose.Schema({
    itemName: {
        type : String,
        required: true
    },
    itemPrice : {
        type: String,
        required: true
    },
    itemDecription :{
        type: String,
        required: true
    }

});
// Was thinking of adding an image schema don't know what you think , hit me up once you read the code

// export Seller Model

module.exports = mongoose.model('seller', SellerSchema);

module.exports.get = (callback, limit) => {
    Seller.find(callback).limit(limit);
}