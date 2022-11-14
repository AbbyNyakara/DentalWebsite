import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.scss'

const Contact = () => {

  const sucessMessage = useRef();

  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm('service_t900fve', 'template_4l1x2ld', e.target, 'Kz-jAEvaXW1eqlDxz').then(res => {
      if (res.status == 200) {
        console.log("sent")
        e.target.reset()
        sucessMessage.current.style.visibility = "visible";
      }
    }).catch(err => console.log(err))
  }

  return (
    <div className='contact__main' id="contact">
      <div className="contact__header">
        <h2 className='contact__title'>We would love to hear from you!</h2>
        <p className='contact__description'>Leave us a message or visit our clinic along airport road Isiolo town</p>
      </div>
      <div className="contact">
        <div className="contact__info">
          <form action="" className='contact__form' onSubmit={sendEmail}>

            <div className="contact__section">
              <label htmlFor="">Your Name</label>
              <input type="text" name="name" id="" placeholder="John Doe" required/>
            </div>
            <div className="contact__section">
              <label htmlFor="">Email</label>
              <input type="email" name="user_email" id="" placeholder="jdoe@example.com" required/>    
            </div>
            <div className="contact__section">
              <label htmlFor="">Message</label>
              <textarea name="message" id="" cols="20" rows="5" placeholder="Write Your Message" required></textarea>
            </div>       
            <button className='contact__button'>Send Message</button>
            <small className='thankyou__msg' ref={sucessMessage}>Thank you! Your message has been received</small>
          </form>
        </div>
        <div className="contact__map">
          <iframe className='location__map' id="gmap_canvas" src="https://maps.google.com/maps?q=isiolo%20airport%20road%20jatim&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div> 
      </div>     
    </div>
  )
}

export default Contact