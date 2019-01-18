const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get("/all", catchErrors(userController.getusers)
);

router.get("/test", (req, res) => {
    res.send("it works test")
});

router.post('/register', 
userController.validateRegister,
catchErrors(userController.register)
);
router.post('/login', authController.login)


module.exports = router;