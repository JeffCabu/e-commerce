import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'
import AddProductContainer from '../pages/products/AddProductContainer'
import ProductsContainer from '../pages/products/ProductsContainer'
import ViewProductContainer from '../pages/products/ViewProductContainer'
import SignUpContainer from '../pages/authentication/SignUpContainer'

const style = {
  container: {
    background: 'blue',
    color: 'white',
    padding: 20
  }
}
const Main = ({ domainData }) => {
  return (
    <main style={style.container}>
      <p>main.js </p>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/add-product' component={AddProductContainer} />
      <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
      <Route exact path='/product/:_id' component={ViewProductContainer} />
      <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
      {/* <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} /> */}
    </main>
  )
}

Main.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Main
