import React from 'react'
import Profile from '../assets/profile.png'

const Navbar = () => {
  return (
    <div className='NavContainer'>
        <div className='navBar'>
            <div className='logo'>
                <h2>Conquer Tab</h2>
            </div>
            <div className='logo'>
                <img style={{width: '50px'}} src={Profile} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar