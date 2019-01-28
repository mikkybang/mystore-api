const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');
const passport = require('passport');

router.get("/all", catchErrors(userController.getusers)
);

router.get("/test", (req, res) => {
    res.send("it works test")
});


router.post('/register',
    userController.validateRegister,
    catchErrors(authController.register),
);
router.post('/login',
    authController.login)

router.get('/:email', userController.getuserByEmail)


router.get('/protect',  passport.authenticate('jwt', {session: false}), (req, res) => {
    res.send('i am here')
});

router.get('/logout', authController.logout, (req, res) => {
    res.send("logged out");
})

module.exports = router;