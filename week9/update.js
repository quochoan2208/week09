const express = require('express');
const app = express();
const Product = require('./product.js')

function updateProduct(currentName, newName, Product) {
       return Product.updateOne({ name: currentName }, { name: newName });
     }
module.exports = updateProduct;
