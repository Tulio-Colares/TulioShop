const express = require('express')
const app = express()
const port = 5000

const mongoConnect = require('./config/database.js')
require('dotenv').config()
const productRoutes = require('./routes/productRoutes.js')

mongoConnect()

// Product Routes
app.use('/api/products', productRoutes)

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})