import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const ProductList = ({products, deleteProduct}) => {
  return (
    <div>
      {
        products.map((product, index) => {
          return <ProductCard
            {...product}
            deleteProduct={deleteProduct}
            key={index} />
        })
      }
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired
}
export default ProductList
