// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },

});
productSchema.index({ name: 'text', description: 'text' });


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
