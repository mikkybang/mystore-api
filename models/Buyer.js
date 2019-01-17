const mongoose = require('mongoose');
 //setting up schema

 const BuyerSchema = mongoose.Schema({
     itemName: {
         type: String,
         required: true
     },
     itemPrice : {
         type: String,
         required: true
     }
 });


 // Export Buyer Model

 module.exports = mongoose.model('buyer', BuyerSchema);

 module.exports.get = (callback, limit) => {
     Buyer.find(callback).limit(limit);
 }