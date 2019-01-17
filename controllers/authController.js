const passport = require('passport');


exports.login = passport.authenticate('local');

exports.logout = (req, res) => {
    req.logout();
}

exports.isLoggedIn = () => {
    if(req.isAuthenticated()){
        next();
        return;
    }
    return false;
}