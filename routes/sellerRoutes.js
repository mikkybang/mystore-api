const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');



//seller

router.route('/sellers')
    .get(sellerController.index)
    .post(sellerController.new);


router.route('/sellers/:seller_id')
    .get(sellerController.view)
    .patch(sellerController.update)
    .put(sellerController.update)
    .delete(sellerController.delete);


module.exports = router