import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GatsbyLink from "gatsby-link";
import logo from '../images/logo-black.svg'

const Header = ({ siteTitle }) => (
<> 
    <div className="nav">
      <div className="navContent">
        <Link to="/">Login</Link>
        <Link to="/"><button>Register</button>  </Link>
        
      </div>
    </div>

      <header className="kenburns-top">  

          <div className='headerContent'>
              
              <div><img src={require('../images/logo-black.svg')} width="200"/></div>
              <h1 className='tracking-in-expand'>Discover amazing food cooked by locals</h1>
          </div>
        </header>
  </>
)



export default Header
