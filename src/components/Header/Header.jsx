import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.jpg'
import dental_name from '../../assets/waymark-dental.png'

const Header = () => {
  return (
    <div className='header' id="header">
      <div className="header__top">
        <div className="header__working-hrs">
          <p className='header__top-workingHrs'>Monday - Friday 8.00am - 5.00pm</p>
          <p className='header__top-workingHrs'>Sunday - 8.00am - 5.00pm</p>
        </div>
        
        <a href="tel:+254719325889" className='header__top-cell'>+254 719 325889</a>
        {/* <p className='header__top-cell'>+254 703 728130</p> */}
      </div>
      <div className="header__bottom">
        <div className="header__logo">
          <img src={logo} alt="" />
          <img src={dental_name} alt="" />
        </div>
        <ul className="header__navigation">
          <li>Home</li>
          <li>Insurance Partners</li>
          <li>Our Location</li>
          <li>Meet Your Dentist</li>
          <li>Our Services</li>
          <li>Contact Us</li>
          <li className='schedule'>Schedule a visit</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header