const express = require('express')
const app = express()
const port = 5000
const products = require('./products')

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})