const express = require('express');
const helmet = require('helmet');
const path = require('path');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const expressLayouts = require('express-ejs-layouts');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/v1');
const adminRoutes = require('./routes/v1/admin.route');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');


const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}



// Access public folder from root
 
app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/layouts/', function (req, res) {
  res.render('view');
});

// For set layouts of html view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
// backend layout
app.get('/root', function (req, res,next) {
  app.set('layout', 'backend/layout');
  next();
});


app.use(expressLayouts);


// admin routes
app.use('/root', adminRoutes);


// v1 api routes
app.use('/v1', routes);


// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  if(httpStatus.NOT_FOUND){
   res.render('backend/Auth/pages_404')
  }
  //next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
 app.use(errorConverter);

// handle error
 app.use(errorHandler);

module.exports = app;
