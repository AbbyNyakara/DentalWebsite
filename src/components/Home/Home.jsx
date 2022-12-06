import React from 'react'
import './Home.scss'
import headshot from '../../assets/headshot.webp'

const Home = () => {
  return (
    <div className='home'>
      <div className="home__main">
        <div className="home__intro">
          <h1 className='home__header'>Redefining Dental Care</h1>
          <p className='home__sub-header'>Love and Smiles for Eternity!</p>
          <div className="home__bookings">
            <button>
              <a href="tel:+254703728130" className='header__top-cell'>Call Us today</a>
            </button>
            <button>Book Consultation</button>
          </div>
        </div>

        <div className="home__image">
          <img src={headshot} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home