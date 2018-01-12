import React from 'react'
import NavItem from './NavItem'

const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItem: 'center',
    background: 'black'
  }
}
const Header = () => {
  return (
    <nav style={style.container}>
      <NavItem exact to='/'> Home </NavItem>
      <NavItem to='/about'>About </NavItem>
      <NavItem to='/add-product'> Add Product</NavItem>
      <NavItem to='/products'> Products </NavItem>
    </nav>
  )
}

export default Header
