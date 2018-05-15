const mongoose = require('mongoose');
// Schema is the definition to create model 
const { Schema } = mongoose;

// create an user model
const userSchema = new Schema({
   googleID: String,
   gmail: String,
});
   
// create a new collection in the database
mongoose.model('User', userSchema);