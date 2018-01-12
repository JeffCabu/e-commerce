import React from 'react'

import About from '../pages/About'
import Home from '../pages/Home'
import AddProductContainer from '../pages/products/AddProductContainer'

import { Route } from 'react-router-dom'

const style = {
  container: {
    background: 'blue',
    color: 'white',
    padding: 20
  }
}
const Main = () => {
  return (
    <main style={style.container}>
      <p>main.js </p>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/add-product' component={AddProductContainer} />
    </main>
  )
}

export default Main
