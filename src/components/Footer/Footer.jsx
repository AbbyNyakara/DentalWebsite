import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './footer.scss';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
  <div className='footer' id="footer">
    <div className="footer__main">
      <div className="footer__location">
        <h4 className="footer__subheading">Our Location</h4>
        <p>We are conveniently located at the heart of Isiolo Town</p>
        <p> <span>Airport Road</span> - Isiolo Town Near Jatim Engineering</p>
        <p>Phone : <a href="tel: +254719325889"></a> <span>0719325889</span></p>
        <p>Email : <a href="mailto: waymarkdentalltd@gmail.com"><span>waymarkdentalltd@gmail.com</span> </a></p>
      </div>

      <div className="footer__workinghrs">
        <h4 className="footer__subheading">Working Hours</h4>
        <p>Monday-Friday: <span> 8.00am - 5.00pm</span></p>
        <p>Saturday: <span>Closed</span></p>
        <p>Sunday: <span>8.00am - 3.00pm</span></p>
        <p>Public Holidays: <span>By Appointment Only</span> </p>
      </div>

      <div className="footer__quick-links">
        <h4 className="footer__subheading">Quick Links</h4>
          <div className="footer__hashlinks">
            <HashLink smooth to="#header" className='hashlink'> Home</HashLink>
            <HashLink smooth to="#partners" className='hashlink'> Partners</HashLink>
            <HashLink smooth to="#doctor" className='hashlink'> About</HashLink>
            <HashLink smooth to="#services" className='hashlink'> Our Services</HashLink>
            <HashLink smooth to="#reviews" className='hashlink'> Reviews</HashLink>
            <HashLink smooth to="#contact" className='hashlink'> Location</HashLink>
            <HashLink smooth to="#contact" className='hashlink'> Contact</HashLink>
          </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p>All Rights Reserved, Copyright &copy; {year} <span>Waymark Dental Centre</span> | Website Designed and Created by <a href="mailto: abbynyakara@gmail.com"> <span> Abby Nyakara</span> </a></p>
    </div>
  </div>
  )
}

export default Footer