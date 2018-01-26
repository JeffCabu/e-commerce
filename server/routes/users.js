const express = require('express')
const Router = express.Router()
const User = require('../models/User')
const mongoose = require('mongoose')

Router.route('/')
  .get((req, res) => {
    User.find()
      .populate('cart')
      .exec((err, users) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'Success you got the user', data: users})
        }
      })
  })
  .post((req, res) => {
    const user = new User()
    user.setUserData(req.body)
    user.setDate()
    user.save((err, savedUser) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'Successful post', data: savedUser})
      }
    })
  })

Router.route('/cart/:userId')
  .put((req, res) => {
    console.log(req.body)
    const userId = req.params.userId
    User.findById({_id: userId}, (err, user) => {
      if (err) {
        res.json({ error: err })
      } else {
        console.log('This is the product ID', req.body.product_id)
        user.cart.push(mongoose.Types.ObjectId(req.body.product_id))
        user.save((err, user) => {
          if (err) {
            res.json({ error: err })
          } else {
            User.findById(user._id)
              .populate('cart')
              .exec((err, user) => {
                if (err) {
                  res.json({ error: err })
                } else {
                  res.json({ msg: 'SUCCESS', data: user.cart })
                }
              })
          }
        })
      }
    })
  })

Router.route('/removeFromCart/:userId')
  .put((req, res) => {
    const userId = req.params.userId
    User.findById({_id: userId}, (err, user) => {
      if (err) {
        res.json({ error: err })
      } else {
        user.cart.splice(user.cart.indexOf(req.body.product_id), 1)
        user.save((err, user) => {
          if (err) {
            res.json({ error: err })
          } else {
            User.findById(user._id)
              .populate('cart')
              .exec((err, user) => {
                if (err) {
                  res.json({ error: err })
                } else {
                  res.json({ msg: 'SUCCESS', data: user.cart })
                }
              })
          }
        })
      }
    })
  })

Router.route('/:userId')
  .get((req, res) => {
    const userId = req.params.userId
    User.findById({_id: userId})
      .populate('cart')
      .exec((err, user) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: `Found: ${userId}`, data: user})
        }
      })
  })
  .put((req, res) => {
    const editUserId = req.params.userId
    User.findById({_id: editUserId}, (err, user) => {
      if (err) {
        res.json({error: err})
      } else {
        user.setUserData(req.body)
        user.save((err, updatedUser) => {
          if (err) {
            res.json({error: err})
          } else {
            res.json({msg: `Successfully Updated ${editUserId}`, user: updatedUser})
          }
        })
      }
    })
  })
  .delete((req, res) => {
    const deleteUser = req.params.userId
    User.remove({_id: deleteUser}, (err, user) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Deleted: ${deleteUser}`, data: user})
      }
    })
  })

module.exports = Router
