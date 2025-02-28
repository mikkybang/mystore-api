const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyerController');

//Buyer routes

router.route('/')
    .get(buyerController.index)
    .post(buyerController.new);


router.route('/:email')
    .get(buyerController.getbuyerbyEmail)
    .patch(buyerController.update)
    .put(buyerController.update)
    .delete(buyerController.delete);


module.exports = router
