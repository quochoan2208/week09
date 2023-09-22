const { Int32, Double } = require('mongodb');
const mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/mydb';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log("Successfully connected")
}).catch((err)=>{
    throw err
});
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const ProductSchema = new Schema({
    
    name: { type: String, default: 'hahaha' },
    description: { type: String, default: 'nothing to say' },
    price: { type: Number,index: true },
    unit: { type: Number,index: true },
})
module.exports = mongoose.model('product',ProductSchema); 
