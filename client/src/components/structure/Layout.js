import React from 'react'
import Main from './Main'
import Footer from './Footer'
import Header from './header/Header'
import PropTypes from 'prop-types'

const style = {
  background: {
    background: 'url(https://images-assets.nasa.gov/image/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o~medium.jpg)no-repeat center fixed',
    height: '100%',
    minHeight: '100vh'
  }
}
const Layout = ({domainData}) => {
  return (
    <div style={style.background} >
      <Header domainData={domainData} />
      <Main domainData={domainData} />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Layout
