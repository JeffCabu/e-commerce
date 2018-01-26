import React from 'react'
import CartCard from './CartCard'
import PropTypes from 'prop-types'

const CartList = ({cartProducts, cartReady}) => {
  return (
    <div>
      {
        cartReady
          ? cartProducts.map(product => <CartCard product={product} />)
          : 'Cart is empty'
      }
    </div>
  )
}

CartList.propTypes = {
  cartProducts: PropTypes.object.isRequired,
  cartReady: PropTypes.object.isRequired
}
export default CartList
