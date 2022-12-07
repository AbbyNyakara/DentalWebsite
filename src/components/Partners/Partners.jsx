import React from 'react';
import './Partners.scss';
import Partner1 from '../../assets/partners/kmpdc.webp';
import Partner2 from '../../assets/partners/kda.webp';
import Partner3 from '../../assets/partners/kapd.webp';


const Partners = () => {
  return (
    <div className="partners" id="partners">
      <h2 className='partners__title'>Our Partners</h2>
      <div className='partners__all'>
        <img className='partner__insurance' src={Partner1} alt="" />
        <img className='partner__insurance' src={Partner2} alt="" />
        <img className='partner__insurance' src={Partner3} alt="" />
      </div>
    </div>
  )
}

export default Partners