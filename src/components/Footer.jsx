import React from 'react'
import Profile from '../assets/profile.png'

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className='footerBar'>
            <div className='logo'>
                <h2>Conquer Tab</h2>
            </div>
            <div>
                <p>&copy; 2025 Conquer Tab. All Right Reserved.</p>
            </div>
            <div className='logo'>
                <img style={{width: '50px'}} src={Profile} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer