import React, { Component } from 'react'
import AddProductForm from './AddProductForm'
import $ from 'jquery'

class AddProductContainer extends Component {
  state = {
    name: undefined,
    price: undefined,
    img: undefined,
    category: undefined
  }

  onChangeHandler = e => this.setState({[e.target.id]: e.target.value})

  submitProductToServer = e => {
    e.preventDefault()
    const {name, price, img, category} = this.state
    const newProduct = {name, price, img, category}
    $.ajax({
      url: '/api/products',
      method: 'POST',
      data: newProduct
    }).done((response) => {
      console.log('sumbit this', response)
    })
  }

  render () {
    return (
      <AddProductForm
        {...this.state}
        submitProductToServer={this.submitProductToServer}
        onChangeHandler={this.onChangeHandler} />
    )
  }
}

export default AddProductContainer
