const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('User');

// generate indetifying info as cookie 
// to be saved by the browser
passport.serializeUser((user, done) => {
   done(null, user.id);
});

passport.deserializeUser((id, done) => {
   // find user by id
   User.findById(id)
       .then((user) => done(null, user));
});

// inform passport to make use of Google strategy
passport.use(new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
   },
   // execute after user grants access
   async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });
      console.log(existingUser);
      if(existingUser) {
         done(null, existingUser);
      } else {
         const newUser = await new User({ googleID: profile.id, gmail: profile.emails[0].value }).save();
         done(null, newUser);
         console.log(newUser);
      }
   }

));






