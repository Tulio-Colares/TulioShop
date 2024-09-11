const Product = require('../models/productsModel')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
    const productId = req.params.id
    const product = await Product.findById(productId)
    console.log('product: ' + product)
    res.json(product)
})

module.exports = {getProducts, getProductById}