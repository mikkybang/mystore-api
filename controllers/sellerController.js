Seller = require('./sellerController');

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

// Handle create contact actions

exports.new = (req,res) => {
    var seller = new Seller();
    seller.itemName = req.body.ItemName ? req.body.itemName : seller.itemName;
    seller.itemPrice = req.body.itemPrice;
    seller.itemDecription = req.body.itemDecription;

    // save the seller and check for errors
    seller.save((err) =>{
        res.json({
            message: 'New sellers created!',
            data: seller
        });
    });
};


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

exports.update = (req, res) => {
    seller.findById(req.params.seller_id, (err, seller) => {
        if (err)
            res.send(err);
        seller.itemName = req.body.itemName ? req.body.itemName :seller.itemName;
        seller.itemPrice = req.body.seller.itemPrice;
        seller.itemDecription = req.body.seller.itemDecription;

        // save the seller and check  for errors
        seller.save(function (err){
            if (err)
                res.json(err);
            res.json({
                message: 'seller info updated',
                data: seller
            });
        });
    });
}


// Handle delete seller

exports.delete = (req, res) => {
    seller.remove({_id: req.params.seller_id}, (err, seller) => {
        if(err)
            res.send(err);
        res.json({
            status: "success",
            message: "seller deleted"
        })
    });
}