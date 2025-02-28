const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
//const flash = require('connect-flash');
const expressValidator = require('express-validator');
const userRoutes = require('./routes/userRoute');
const storeRoutes = require('./routes/storeRoute');
const buyerRoutes = require('./routes/buyerRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const errorHandlers = require('./handlers/errorHandlers');

//require passport
require('./handlers/passport');

// create our Express app
const app = express();


// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// // Passport JS is what we use to handle our logins
app.use(passport.initialize());

// // The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
// app.use(flash());

// pass variables to our templates + all requests
// app.use((req, res, next) => {
//   res.locals.h = helpers;
//   res.locals.flashes = req.flash();
//   res.locals.user = req.user || null;
//   res.locals.currentPath = req.path;
//   next();
// });

// // promisify some callback based APIs
// app.use((req, res, next) => {
//   req.login = promisify(req.login, req);
//   next();
// });

// After allllll that above middleware, we finally handle our own routes!
// app.use('/', routes);
app.use('/store', storeRoutes);
app.use('/user', userRoutes);
app.use('/buyer', buyerRoutes);
app.use('/seller', sellerRoutes);


// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
//app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;
