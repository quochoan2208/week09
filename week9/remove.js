const express = require('express');
const app = express();
const Product = require('./product.js')


function removeone(name,Product){
     Product.deleteOne({name: name}).then(()=>{
                console.log("Successfully deleted")
            }).catch((err)=>{
                throw err
                        })

}
function removemany(Product){
    Product.deleteMany().then(()=>{
               console.log("Successfully deleted")
           }).catch((err)=>{
               throw err
                       })

}
module.exports = {
    removeone,
    removemany
}
     