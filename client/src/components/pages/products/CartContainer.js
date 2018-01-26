import React from 'react'
import PropTypes from 'prop-types'
import CartList from './CartList'

const CartContainer = ({domainData}) => {
  // console.log(domainData.user.cart)
  console.log('cartContainer', domainData)
  return (
    <div>
      {
        domainData.cartReady
          ? <CartList cartProducts={domainData.user.cart}
            cartReady={domainData.cartReady} />
          : 'No user logged in'
      }
    </div>
  )
}

CartContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default CartContainer
