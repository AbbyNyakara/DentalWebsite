import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact__main' id="contact">
      <div className="contact__header">
        <h2 className='contact__title'>We would love to hear from you!</h2>
        <p className='contact__description'>Leave us a message or visit our clinic along airport road Isiolo town</p>
      </div>
      <div className="contact">
        <div className="contact__info">
          <form action="" className='contact__form'>
            <div className="contact__section">
              <label htmlFor="">Your Name</label>
              <input type="text" name="name" id="" placeholder="John Doe" />
            </div>
            <div className="contact__section">
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="" placeholder="jdoe@example.com" />    
            </div>
            <div className="contact__section">
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Write Your Message"></textarea>
            </div>       
            <button className='contact__button'>Send Message</button>
          </form>
        </div>
        <div className="contact__map">
          <iframe className='location__map' id="gmap_canvas" src="https://maps.google.com/maps?q=isiolo%20airport%20road%20jatim&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div> 
      </div>     
    </div>
  )
}

export default Contact