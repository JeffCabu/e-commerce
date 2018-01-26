import React from 'react'
import NavItem from './NavItem'
import HeaderLink from './HeaderLink'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const style = {
  container: {
    border: '3px orange solid',
    display: 'flex',
    justifyContent: 'space-around',
    // padding: 2,
    // flexDirection: 'column',
    // alignItem: 'center',
    background: 'black'
  },
  item: {
    // border: 'solid green 5px',
    flex: '1',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'space-around',
    alignSelf: 'center'
    // background: 'black'
  },
  button: {
    borderLeft: 'solid red 2px',
    padding: 0
  }
}
const Header = ({domainData}) => {
  return (
    <div style={style.container}>
      <nav style={style.item}>
        <NavItem exact to='/'> Home </NavItem>
        <NavItem to='/about'>About </NavItem>
        <NavItem to='/add-product'>Add Product</NavItem>
        <NavItem to='/products'> Products </NavItem>

        {/* {domainData.loggedIn ? <HeaderLink>{domainData.user.local.email}</HeaderLink> : null} */}
      </nav>
      <div>
        {
          domainData.loggedIn
            ? <NavItem to='/cart'>Cart</NavItem>
            : null
        }
        {domainData.loggedOut
          ? <div>
            <Button style={style.button}><NavItem to='/sign-up'>SignUp</NavItem></Button>
            <Button style={style.button}><NavItem to='/login'>Login</NavItem></Button>
          </div>
          : null
        }
        {/* {domainData.loggedOut ? <NavItem to='/login'>Login</NavItem> : null } */}
        {domainData.loggedIn
          ? <Button raised><HeaderLink onClick={domainData.logoutUser}>Logout: {domainData.user.local.email}</HeaderLink></Button>
          : null
        }
      </div>
    </div>
  )
}

Header.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Header
