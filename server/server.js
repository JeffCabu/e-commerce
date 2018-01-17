const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const productRoute = require('./routes/products')
const userRoute = require('./routes/users')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/e-commerce')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
