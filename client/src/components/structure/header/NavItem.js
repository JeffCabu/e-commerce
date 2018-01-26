import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  color: {
    color: 'white',
    width: 90,
    height: 34,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
const NavItem = ({to, children, exact}) =>
  <NavLink activeStyle={{
    color: 'red',
    fontWeight: 'bold'
  }} style={style.color} exact={exact} to={to}>{children}</NavLink>

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired
}

NavItem.defaultProps = {exact: false}

export default NavItem
