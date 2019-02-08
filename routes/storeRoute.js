const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');


router.post('/create/:sellerid',
    catchErrors(storeController.createStore)
);
router.get('/:slug',
    catchErrors(storeController.getStoreBySlug)
);
router.get('/:slug/edit',
    catchErrors(storeController.editStore)
);
router.put('/:slug/edit',
    catchErrors(storeController.updateStore)
);
router.delete('/:slug/delete',storeController.deleteStore);


module.exports = router;