const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
  product_name: String,
  price: Number,
  discount_percent: Number,
  discounted_price: Number,
  category: String,
  city: String,
  start_date: String,
  end_date: String
});

module.exports = mongoose.model('Discount', DiscountSchema);
