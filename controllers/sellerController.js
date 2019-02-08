const mongoose = require('mongoose');
const User = mongoose.model('User');
const Seller = mongoose.model('Seller');
const Buyer = mongoose.model('Buyer');

// Handling index action for the seller


exports.index = (req, res) => {
  Seller.get((err, sellers) => {
      if(err) {
          res.json ({
              status: "error",
              message : err,
          });
      }
      res.json({
         status: "success",
         message: "Sold successfully",
         data: sellers
      });
  });  
};


exports.getSellerByEmail = async (req, res) => {
    const seller = await Seller.findOne({email: req.params.email}).populate('user store')
     res.json(seller);
}


// Handle view contact info

exports.view = (req, res) => {
    seller.findById(req.params.buyer_id, (err, buyer) => {
        if (err)
            res.send(err);
        res.json({
            message: 'sellers details loading..',
            data: seller
        });
    });
};

// Handle update sellers info

exports.update = async (req, res) => {
    const seller = await Seller.FindOneAndUpdate({email: req.params.email}, req.body)
}


// Handle delete seller

exports.delete = async (req, res) => {
    const pemail = req.params.email
    await Seller.findOneandRemove({email: pemail}).exec()
    await User.findOneAndRemove({email: pemail}).exec()
}