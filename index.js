const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

// connect to MongoDB
mongoose.connect(keys.mongoURI);
// create an express app
const app = express();
// tell express to use cookie
app.use(
   cookieSession({
      maxAge: 30 * 86400 * 1000,
      keys: [keys.cookieKey],
   })
);
// tell passport to use cookie
app.use(passport.initialize());
app.use(passport.session());
   
require('./routes/route')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`App is running on port ${PORT} `));

