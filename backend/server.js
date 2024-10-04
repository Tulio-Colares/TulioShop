const express = require('express')
const app = express()
const port = 5000
const cookieParser = require('cookie-parser')
const path = require('path')

const mongoConnect = require('./config/database.js')
require('dotenv').config()
const productRoutes = require('./routes/productRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const orderRoutes = require('./routes/orderRoutes.js');
const uploadRoutes = require('./routes/uploadRoutes.js')

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

// Paypal safe route
app.get('/api/config/paypal', (req, res) => res.send({
    clientId: process.env.PAYPAL_CLIENT_ID
}))

// Upload Routes
const __dirName = path.resolve();
app.use('/uploads', express.static(path.join(__dirName, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirName, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirName, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})