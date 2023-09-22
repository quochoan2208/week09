const express = require('express');
const app = express();
const Product = require('./product.js')

function findItems(itemName, Product) {
    return Product.find({ name: itemName }).exec(); 
}
module.exports = findItems;