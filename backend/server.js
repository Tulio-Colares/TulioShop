const express = require('express')
const app = express()
const port = 5000
const products = require('./products')

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res) => {
    let product = products.filter((p) => p._id == req.params.id)
    product = product[0]
    res.json(product)
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})