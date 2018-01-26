import React from 'react'
import PropTypes from 'prop-types'

const CartCard = ({product}) => {
  console.log(product)
  return (
    <div>
      {product.name}
      {product.price}
    </div>
  )
}

CartCard.propTypes = {
  product: PropTypes.element.isRequired
}
export default CartCard
