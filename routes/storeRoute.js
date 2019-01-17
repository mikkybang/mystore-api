const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get("/", (req, res) => {
    res.send("it works")
});

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


module.exports = router;