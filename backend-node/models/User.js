const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  shop_name: String,
  email: String,
  phone: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
