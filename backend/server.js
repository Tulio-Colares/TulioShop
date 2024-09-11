const express = require('express')
const app = express()
const port = 5000
const products = require('./products')
const mongoose = require('mongoose')
require('dotenv').config()
const asyncHandler = require('express-async-handler')
const Product = require('./models/productsModel')

// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
  });


// Products Route
app.get('/api/products', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

// Single Product Route
app.get('/api/product/:id', asyncHandler(async (req, res) => {
    const productId = req.params.id
    const product = await Product.findById(productId)
    res.json(product)
}))

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})