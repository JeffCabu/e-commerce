import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
import ViewProduct from './ViewProduct'

class ViewProductContainer extends Component {
  state = {
    product: null
  }
  componentDidMount = () => {
    this.getOneProduct(this.props.match.params._id)
  }

  getOneProduct = (id) => {
    $.ajax({
      url: `/api/products/${id}`,
      method: 'GET'
    }).done((response) => {
      console.log('One product recieved', response)
      this.setState({ product: response.product })
    })
  }
  render () {
    return (
      <div>
        Hello from ViewProduct
        {
          this.state.product
            ? <ViewProduct product={this.state.product} />
            : 'No Product To See'
        }
      </div>
    )
  }
}

export default withRouter(ViewProductContainer)
