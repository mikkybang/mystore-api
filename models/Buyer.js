let mongoose = require('mongoose');
 //setting up schema

 let BuyerSchema = mongoose.Schema({
     item: {
         type: String,
         required: true
     },
     price : {
         type: String,
         required: true
     }
 });


 // Export Buyer Model

 let Buyer = module.exports = mongoose.model('buyer', BuyerSchema);

 module.exports.get = (callback, limit) => {
     Buyer.find(callback).limit(limit);
 }