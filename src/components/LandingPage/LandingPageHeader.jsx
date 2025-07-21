import React from 'react'
import '../../css/LandingPageHeader.css'

function LandingPageHeader() {
  return (
    <div className='header-container' style={{background:"white", width: '100vw'}}>
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
