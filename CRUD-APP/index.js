const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/cruddb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));


const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

const Item = mongoose.model('Item', itemSchema);

app.post('/items', (req, res) => {
  const newItem = new Item(req.body);
  newItem.save()
    .then(item => res.status(201).send(item))
    .catch(err => res.status(500).send(err));
});

app.get('/items', (req, res) => {
  Item.find({})
    .then(items => res.status(200).send(items))
    .catch(err => res.status(500).send(err));
});

app.put('/items/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(item => {
      if (!item) return res.status(404).send('Item not found');
      res.status(200).send(item);
    })
    .catch(err => res.status(500).send(err));
});


app.delete('/items/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(item => {
      if (!item) return res.status(404).send('Item not found');
      res.status(200).send(item);
    })
    .catch(err => res.status(500).send(err));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
