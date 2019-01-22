const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const buyerController = require('../controllers/buyerController');
const sellerController = require('../controllers/sellerController');
const { catchErrors } = require('../handlers/errorHandlers');


router.get('/you', buyerController.view)

router.post('/add',
    catchErrors(storeController.createStore)
);

router.get('/:slug',
    catchErrors(storeController.getStoreBySlug)
);

router.get('/:slug/edit',
    catchErrors(storeController.editStore)
);

router.post('/:slug/edit',
    catchErrors(storeController.updateStore)
);



// router.get("/", (req, res) => {
//     res.json({
//         status: 'Api it;s working',
//         message: 'Welcome to Store to Store api Services'
//     });
// });



//Buyer routes

router.route('/buyers')
    .get(buyerController.index)
    .post(buyerController.new);


router.route('/buyers/:email')
    .get(buyerController.getbuyerbyEmail)
    .patch(buyerController.update)
    .put(buyerController.update)
    .delete(buyerController.delete);



//seller

router.route('/sellers')
    .get(sellerController.index)
    .post(sellerController.new);


router.route('/sellers/:seller_id')
    .get(sellerController.view)
    .patch(sellerController.update)
    .put(sellerController.update)
    .delete(sellerController.delete);




module.exports = router;