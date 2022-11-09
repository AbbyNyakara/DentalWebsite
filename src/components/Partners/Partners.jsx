import React from 'react';
import './Partners.scss';
import Partner1 from '../../assets/partners/kmpdc.png'
import Partner2 from '../../assets/partners/kda.png'


const Partners = () => {
  return (
    <div className="partners" id="partners">
      <h2 className='partners__title'>Our Partners</h2>
      <div className='partners__all'>
        <img className='partner__insurance' src={Partner1} alt="" />
        <img className='partner__insurance' src={Partner2} alt="" />
      </div>
    </div>
  )
}

export default Partners