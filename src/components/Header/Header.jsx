import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import './Header.scss';
import logo from '../../assets/logo.jpg';
import dental_name from '../../assets/waymark-dental.png';

const Header = () => {

  const [showLinks, setShowlinks] = useState(false)

  return (
    <div className='header' id="header">
        {/* Header top for Desktop screen only */}
      <div className="header__top">
        <div className="header__working-hrs">
          <p className='header__top-workingHrs'>Monday - Friday : 8.00am - 5.00pm</p>
          <p className='header__top-workingHrs'>Sunday : 8.00am - 3.00pm</p>
        </div>
        <a href="tel:+254719325889" className='header__top-cell'>0719 325 889</a>
      </div>


{/* Main working path */}

      <div className="header__bottom">

        {/* left Logo Section */}
        <div className="header__logo">
          <img src={logo} alt="" />
          <img src={dental_name} alt="" />
        </div>

        <div className='header__main'>
          <div className='header__links' id={ showLinks ? "hidden" : "" } onClick={() => setShowlinks(!showLinks)}>
            <HashLink smooth to="#header" className='header__link'> Home</HashLink>
            <HashLink smooth to="#partners" className='header__link'> Partners</HashLink>
            <HashLink smooth to="#doctor" className='header__link'> About</HashLink>
            <HashLink smooth to="#services" className='header__link'> Our Services</HashLink>
            <HashLink smooth to="#reviews" className='header__link'> Reviews</HashLink>
            <HashLink smooth to="#contact" className='header__link'> Location</HashLink>
            <HashLink smooth to="#contact" className='header__link'> Contact</HashLink>
            <div className="socials__nav">
              <a href="https://www.instagram.com/waymarkdental/" target='_blank'><AiOutlineInstagram className="social_nav-icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100086539784832" target='_blank'><AiOutlineFacebook   className="social_nav-icon" /></a>
              <a href="mailto:waymarkdentalltd@gmail.com" target='_blank'><AiOutlineMail   className="social_nav-icon" /></a>
            </div>
          </div>
          <button className='menu__button' onClick={() => setShowlinks(!showLinks)}>
            <AiOutlineMenu />
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default Header


{/* <div className="socials__nav">
              <a href="https://www.instagram.com/waymarkdental/" target='_blank'><AiOutlineInstagram className="social_nav-icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100086539784832" target='_blank'><AiOutlineFacebook   className="social_nav-icon" /></a>
              <a href="mailto:waymarkdentalltd@gmail.com" target='_blank'><AiOutlineMail   className="social_nav-icon" /></a>
            </div> */}