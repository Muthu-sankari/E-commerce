import React from 'react'
import './Header.css'
import handicon from '../Assests/handicon.jpg'
import hero from '../Assests/hero.jpg'
const Header = () => {
  return (
    <div className='Header'>
      <div className="Header-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='Hand-icon'>
            <p>new</p>
            <img src={handicon}alt=''></img>

          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="Header-latest">
          <div>Latest collection</div>
          <img src='' alt=''></img>
        </div>
      </div>
      <div className="Header-right">
      <img src={hero}alt=''></img>

      </div>
    </div>
  )
}

export default Header