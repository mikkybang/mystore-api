const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');



//seller

router.route('/')
    .get(sellerController.index)


router.route('/:email')
    .get(sellerController.getSellerByEmail)
    .patch(sellerController.update)
    .delete(sellerController.delete);


module.exports = router