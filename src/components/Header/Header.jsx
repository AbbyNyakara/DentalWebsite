import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__top">
        <p className='header__top-workingHrs'>monday - friday 8.00am - 5.00pm</p>
        <p className='header__top-cell'>+254 703 728130</p>
      </div>
      <div className="header__bottom">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header__navigation">
          <li>Home</li>
          <li>Insurance Partners</li>
          <li>Our Location</li>
          <li>Meet Your Dentist</li>
          <li>Our Services</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li className='schedule'>Schedule a visit</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header