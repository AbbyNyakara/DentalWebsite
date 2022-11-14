import React from 'react';
import './reviews.scss';
import reviewsBg from '../../assets/offices.jpg'

const Reviews = () => {
  return (
    <div className='reviews' id="reviews">
      {/* <h2>What Our Patients have to say</h2> */}
      <div id="carouselExampleFade" className="reviews__main carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner main-carousel">
          <div className="carousel-item active">
            <p className="d-block w-80"> "Dr. Chris is a genius.What he has been able to achieve with my teeth is four days 
            is awesome, and it took a lot of work. The results are always promising. I highly reccomend him especially for 
            treating children since he has a speciality for treating Children"</p>
            <cite>- Mr Leon Mwangi (Actual Patient) </cite>
          </div>
          <div className="carousel-item">
            <p className="d-block w-80"> "...Always informative of what is happening and what will happen
            in the future about a particular procedure that he is doing. A calm and collected dentist. This is
            the place to choose over and over again! "</p>
            <cite>- Christine Wawira (Actual Patient)</cite>
          </div>
          <div className="carousel-item">
            <p className="d-block w-80"> I was always very anxious about visiting the dentist. Dr Chris isnt just a 
            professional, but spent time making sure I was calm and assured me of a painless procedure! There is no other
            dentist I would go to or reccomend! </p>
            <cite>- Shani Lali (Actual Patient)</cite>
          </div>
          <div className="carousel-item">
            <p className="d-block w-80"> Dr. Chris did the teeth whitening procedure on me and I must say I was
            quite impressed. The service was amazing and he made sure I wasn't in pain trhoughout the procedure.
            He is patient and kind, knows how to take care of his patients!  </p>
            <cite>- Velbridgette Mandera (Actual Patient)</cite>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="reviews__bg">
        <img src={reviewsBg} alt="" />
      </div>
    </div>
  )
}

export default Reviews