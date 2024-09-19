const express = require('express')
const app = express()
const port = 5000
const cookieParser = require('cookie-parser')

const mongoConnect = require('./config/database.js')
require('dotenv').config()
const productRoutes = require('./routes/productRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const orderRoutes = require('./routes/orderRoutes.js');

mongoConnect()

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Cookie-Parser middleware
app.use(cookieParser())

// Product Routes
app.use('/api/products', productRoutes)

// User Routes
app.use('/api/users', userRoutes)

// Order Routes
app.use('/api/orders', orderRoutes)

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})