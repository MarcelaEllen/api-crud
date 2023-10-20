const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'product'
});

module.exports = mongoose.model('Product', Product);