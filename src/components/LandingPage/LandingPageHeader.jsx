import React from 'react'
import '../../css/LandingPageHeader.css'

function LandingPageHeader() {
  return (
    <div className='header-container' style={{background:"#ffdf5e"}}>
        <div className='header-bar'>
            <p className='LogoName'>AETHER </p>
            <div className='navigation-Buttons'>
              <a href="">About Us</a>
              <a href="">Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default LandingPageHeader
