import React from 'react'
import './services.scss'

const Services = () => {
  return (
    <div className='services'>
        <h2 className='services__title'>Comprehensive Dentistry For the Entire Family</h2>
        <h3 className='services__subtitle'>Our Services</h3>
        <div className="services__types">
          <div className="services__box box1">
            <h4 className='services__name'>General Dentistry</h4>
          </div>
          <div className="services__box box2">
            <h4  className='services__name'>Cosmetic Dentistry</h4>
          </div>
          <div className="services__box box3">
            <h4  className='services__name'>Orthodontics</h4>
          </div>
          <div className="services__box box4">
            <h4  className='services__name'>Pediatric Dentistry</h4>
          </div>
        </div>
        <div className="services__offers">
          <details className="our_services">
            <summary>Browse all our services</summary>
            <div className="services__all">

              <div className="services__part1">
                <h4 className="services__title-name">General Dentistry and Orthodontics</h4>
                <div className="services__orthodontics">
                  <p> <span className='dot'></span> Complete Exams(x-rays)</p>
                  <p> <span className='dot'></span> Fillings</p>
                  <p> <span className='dot'></span> Root Canals</p>
                  <p> <span className='dot'></span> Tooth Extractions</p>
                  <p> <span className='dot'></span> Dental Cleaning</p>
                  <p> <span className='dot'></span> Braces</p>
                  <p> <span className='dot'></span> Invisalign</p>
                </div>
              </div>

              <div className="services__part2">
                <h4 className="services__title-name">Restorative Dentistry</h4>
                <div className="services__orthodontics">
                  <p> <span className='dot'></span> Bridges</p>
                  <p> <span className='dot'></span> Full and Partial Dentures</p>
                  <p> <span className='dot'></span> Dental Crowns</p>
                  <p> <span className='dot'></span> Dental Implants</p>
                  <p> <span className='dot'></span> Veneers</p>
                </div>
              </div>

              <div className="services__part3">
                <h4 className="services__title-name">Cosmetic Dentistry</h4>
                <div className="services__orthodontics">
                  <p> <span className='dot'></span> Teeth Whitening</p>
                  <p> <span className='dot'></span> Masking</p>
                  <p> <span className='dot'></span> Veneers</p>
                </div>
              </div>

              <div className="services__part4">
                <h4 className="services__title-name">Pediatric Dentistry</h4>
                <div className="services__orthodontics">
                  <p> <span className='dot'></span> Specialized Kids Dentistry</p>
                  <p> <span className='dot'></span> Checkups</p>
                </div>
              </div>

            </div>
            
          </details>
        </div>
        
    </div>
  )
}

export default Services