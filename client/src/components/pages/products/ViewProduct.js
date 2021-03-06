import React from 'react'
import PropTypes from 'prop-types'

const ViewProduct = ({product}) => {
  return (
    <div>
      <p>{product.name}</p>
      <img src={product.img} />
      <p>${product.price}</p>
    </div>
  )
}
ViewProduct.propTypes = {
  product: PropTypes.object.isRequired
}
export default ViewProduct
