const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get("/", (req, res) => {
    res.send("it works")
});


module.exports = router;