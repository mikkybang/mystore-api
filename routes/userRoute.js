const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get("/", (req, res) => {
    res.send("it works")
});


module.exports = router;