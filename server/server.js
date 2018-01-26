const express = require('express')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const productRoute = require('./routes/products')
const userRoute = require('./routes/users')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/e-commerce')
console.log(session)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  name: 'ecommerce',
  secret: 'some kind of secret',
  secure: false
}))
app.use(passport.initialize())
app.use(passport.session())
require('./passport/Strategies')(passport)
require('./passport/Routes')(app, passport)
app.use(require('./config/error-handler'))

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
