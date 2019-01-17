let mongoose = require('mongoose');

// setting up schema


let SellerSchema = mongoose.Schema({
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

let Seller = module.exports = mongoose.model('seller', SellerSchema);

module.exports.get = (callback, limit) => {
    Seller.find(callback).limit(limit);
}