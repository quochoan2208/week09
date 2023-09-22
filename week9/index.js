const express = require('express');
const app = express();
const Product = require('./product.js')
const adding = require('./add.js');
const reading = require('./read.js');
// const deleteitem = require('./remove.js');
const updateitem = require('./update.js');
const http = require('http').Server(app);
const cors = require('cors'); 
const formidable = require('formidable');
const bodyParser = require('body-parser');
const { removeone, removemany } = require('./remove.js');
app.use(cors());
app.use(bodyParser.json());


const port = 3000;
app.listen(port, ()=>{
    console.log("App is running on port:" 
    + port)

})

app.get('/', async (req, res) => {
    try {

        const docs = await Product.find();
        
        res.send(docs);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error");
    }
});
app.post('/add', async (req, res) => {
    const productData = req.body;
    try {
        const result = await adding(productData, Product);
        res.status(201).json({ message: 'Successfully added' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'There is some problem while inserting product' });
    }
});
app.get('/search', async (req, res) => {
    const itemName = req.query.name; 
    try {
        const foundItems = await reading(itemName, Product); 
        res.json(foundItems); 
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'There is some problem while searching for products' });
    }
});
app.put('/update', async (req, res) => {
    const { currentName, newName } = req.body;
    try {
      const result = await updateitem(currentName, newName, Product);
      if (result.nModified > 0) {
        res.status(200).json({ message: 'Successfully updated' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ error: 'Error' });
    }
  });
  app.delete('/remove', async (req, res) => {
    const productName = req.query.name;
    try {
      await removeone(productName, Product);
      res.status(200).json({ message: 'Successfully deleted' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ error: 'Error' });
    }
  });
  app.delete('/removeAll', async (req, res) => {
    try {
      await removemany(Product);
      res.status(200).json({ message: 'Successfully deleted all products' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ error: 'Error' });
    }
  });

  








  