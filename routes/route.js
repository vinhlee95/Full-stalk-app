const passport = require('passport');

module.exports = (app) => {
   // set up express route handler
   // to kick user into Oauth flow & ask for access permission
   app.get('/auth/google',
      passport.authenticate('google', {
         scope: ['profile', 'email']
      }));

   // set up express route handler
   // to send the code granted by user for information exchange (profile & email)
   app.get('/auth/google/callback',
      passport.authenticate('google'),
      (req, res) => {
         res.redirect('/surveys');
      }
   );
   // route handler for user logged in
   app.get('/current_user', (req, res) => {
      res.send(req.user);
   });

   // route handler for user logged out
   app.get('/logout', (req, res) => {
      req.logout();
      res.send(req.user)
   });
};