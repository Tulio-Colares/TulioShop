const express = require('express')
const app = express()
const port = 5000

const mongoConnect = require('./config/database.js')
require('dotenv').config()
const productRoutes = require('./routes/productRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

mongoConnect()

// Product Routes
app.use('/api/products', productRoutes)

// User Routes
app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})