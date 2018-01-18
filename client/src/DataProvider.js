import * as UserApi from './lib/userApi'
import React, { Component } from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'

export default class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null
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
    newUser: (user) => {
      UserApi.signupUser(user)
        .then(user => {
          this.setState({user})
          return user
        })
    }
    // getOneProduct: (id) => {
    //   $.ajax({
    //     url: `/api/products/${id}`,
    //     method: 'GET'
    //   }).done((response) => {
    //     console.log('One product recieved', response)
    //     this.setState({ products: response.products, isLoaded: true })
    //   })
    // }
  }

  componentDidMount () {
    this.methods.getAllProducts()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods
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
