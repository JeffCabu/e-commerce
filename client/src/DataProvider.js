import * as UserApi from './lib/userApi'
import React, { Component } from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'

export default class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,
    cartReady: false
  }

  methods = {
    getAllProducts: () => {
      $.ajax({
        url: '/api/products',
        method: 'GET'
      }).done((response) => {
        console.log('from DateProvider', response)
        this.setState({ products: response.products, isLoaded: true })
      })
    },
    deleteProduct: (id) => {
      $.ajax({
        url: `/api/products/${id}`,
        method: 'DELETE'
      }).done((response) => {
        console.log('DELETED from DataProvider', response)
        this.methods.getAllProducts()
      })
    },
    newUser: (user) =>
      UserApi.signupUser(user)
        .then(user => {
          console.log('from newUser', user)
          this.setState({user})
          return user
        }),
    loginUser: (email, password) =>
      UserApi.loginUser(email, password)
        .then(user => {
          console.log('loginUser messsage', user)
          // this.setState({user})
          this.methods.getUser(user)
          return user
        }),
    getUser: (user) =>
      UserApi.getUser(user._id)
        .then(user => {
          console.log('from getUser()', user)
          this.setState({user, cartReady: true})
          return user
        }),
    logoutUser: () =>
      UserApi.logoutUser()
        .then(user => {
          this.setState({user: null})
        }),
    addItemToCart: (productId) => {
      if (this.state.user != null) {
        $.ajax({
          url: `/api/users/cart/${this.state.user._id}`,
          method: 'PUT',
          data: {product_id: productId}
        }).done((response) => {
          console.log(response)
          this.methods.getUser(this.state.user)
        })
      } else {
        alert('You must be logged in to continue')
      }
    }
  }

  componentDidMount () {
    this.methods.getAllProducts()
    // this.methods.getUser()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null
    }
    return (
      <div>
        {
          this.state.isLoaded
            ? <Layout domainData={domainData} />
            : <div>...Loading</div>
        }
      </div>
    )
  }
}
