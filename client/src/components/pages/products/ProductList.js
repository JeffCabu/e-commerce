import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const style = {
  container: {
    border: '2px solid green',
    width: '50vw',
    display: 'flex',
    flexDirection: 'column'
  }
}
const ProductList = ({products, deleteProduct, addItemToCart}) => {
  return (
    <div style={style.container}>
      {
        products.map((product, index) => {
          return <ProductCard
            {...product}
            deleteProduct={deleteProduct}
            addItemToCart={addItemToCart}
            key={index} />
        })
      }
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired
}
export default ProductList
