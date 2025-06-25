import React from 'react'
import Facebook from '../assets/Facebook.png'
import Github from '../assets/github.png'
import Newlinkedin from '../assets/NewLinkedin.png'
import Twitter from '../assets/Twitter.png'

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
                <img style={{width: '30px'}} src={Facebook} alt="" />
                <img style={{width: '30px'}} src={Newlinkedin} alt="" />
                <img style={{width: '30px'}} src={Twitter} alt="" />
                <img style={{width: '30px'}} src={Github} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer