Buyer = require('../models/Buyer');

// Handling index actions

exports.index = (req, res) =>{
    Buyer.get((err, buyers) => {
        if(err) {
            res.json ({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "items purchased  successfully",
            data: buyers
        });
    });
};

// Handle create contact actions
exports.new = (req, res) => {
    var buyer = new Buyer();
    buyer.name = req.body.name ? req.body.name : buyer.name;
    buyer.gender = req.body.gender;
    buyer.email = req.body.email;
    buyer.phone = req.body.phone;
// save the buyer and check for errors
    buyer.save((err) => {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New buyer created!',
            data: buyer
        });
    });
};
// Handle view contact info
exports.view = (req, res) => {
    buyer.findById(req.params.buyer_id, (err, buyer) => {
        if (err)
            res.send(err);
        res.json({
            message: 'buyer details loading..',
            data: buyer
        });
    });
};
// Handle update buyer info
exports.update =  (req, res) => {
buyer.findById(req.params.buyer_id,  (err, buyer) => {
        if (err)
            res.send(err);
buyer.name = req.body.name ? req.body.name : buyer.name;
        buyer.gender = req.body.gender;
        buyer.email = req.body.email;
        buyer.phone = req.body.phone;
// save the buyer and check for errors
        buyer.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'buyer Info updated',
                data: buyer
            });
        });
    });
};
// Handle delete buyer
exports.delete = (req, res) => {
    buyer.remove({
        _id: req.params.buyer_id
    },  (err, buyer) => {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'buyer deleted'
        });
    });
};