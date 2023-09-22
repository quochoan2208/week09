const express = require('express');
const app = express();
const Product = require('./product.js')



function insertItems(productData,Product){
    const product = new Product(productData)
    return product.save();

}

module.exports = insertItems
