import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'

import AddProductContainer from '../pages/products/AddProductContainer'
import ProductsContainer from '../pages/products/ProductsContainer'
import ViewProductContainer from '../pages/products/ViewProductContainer'
import CartContainer from '../pages/products/CartContainer'

import SignUpContainer from '../pages/authentication/SignUpContainer'
import LoginContainer from '../pages/authentication/LoginContainer'

const style = {
  container: {
    // background: 'blue',
    color: 'white',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}
const Main = ({ domainData }) => {
  return (
    <main style={style.container}>
      <p>main.js </p>
      {/* <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/add-product' component={AddProductContainer} />
      <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
      <Route exact path='/product/:_id' component={ViewProductContainer} />
      <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
      <Route path='/login' render={() => <LoginContainer domainData={domainData} />} /> */}
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/add-product' component={AddProductContainer} />
        <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
        <Route path='/product/:_id' component={ViewProductContainer} />
        <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
        <Route path='/login' render={() => <LoginContainer domainData={domainData} />} />
        <Route path='/cart' render={() => <CartContainer domainData={domainData} />} />
        <Route path='/' component={Home} />
      </Switch>
      {/* <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} /> */}
    </main>
  )
}

Main.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Main
