import React from 'react'
import "./Doctor.scss"
import docImg from '../../assets/officialPic.jpg';

const Doctor = () => {
  return (
    <div className='doctor' id="doctor">
      <div className="doctor__main">
        <div className="image__section">
          <img src={docImg} alt="" />
        </div>
        <div className="doctor__info">
          <h3 className='doctor__info-title'>Meet Dr. Chrispal Mbegera</h3>
          <p className='doctor__info-profession'>Dental Surgeon</p>
          <div className="quotation">
            <p>"I always strive to provide my patients with the best care possible with honesty and integrity. I put the needs
            of my patients first, ensuring they are comfortable and confident!" </p>
          </div>
          <ul className="doctor__specs">
            <li> <span className='dot'></span> Bachelor of Dental Surgery Degree from The University of Nairobi</li>
            <li> <span className='dot'></span> Member of Kenya Dental Association</li>
            <li> <span className='dot'></span> Member of Kenya Association of Pediatric Dentists</li>
            <li> <span className='dot'></span> Passion for serving patients by providing an unforgettable dental experience</li>
            <li> <span className='dot'></span> Former Dental Associate at Smile Essence Dental Centre</li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Doctor