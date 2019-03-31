import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
<header className='kenburns-top'>  
    <div className='headerContent'>
        <div className='logo'> <img src="" /> </div>
        <h1 className='tracking-in-expand'>Discover amazing food cooked by locals</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
