import React from 'react'
import './footer.scss';

const Footer = () => {

  const year = new Date().getFullYear()

  return (
  <div className='footer'>
    <div className="footer__main">
      <div className="footer__location">
        <h4 className="footer__subheading">Our Location</h4>
        <p>We are conveniently located at the heart of Isiolo Town</p>
        <p> <span>Airport Road</span> - Isiolo Town Near Jatim Engineering</p>
        <p>Phone <span>0703 728 130</span></p>
        <p>Email: <span>waymarkdentalltd@gmail.com</span></p>
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
        <p>Home</p>
        <p>Insurance Partners</p>
        <p>About</p>
        <p>Our Services</p>
        <p>Reviews</p>
        <p>Location</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p>All Rights Reserved, Copyright &copy; {year} <span>Waymark Dental Centre</span> || Designed and Created by <span>Abby Nyakara</span></p>
    </div>
  </div>
  )
}

export default Footer