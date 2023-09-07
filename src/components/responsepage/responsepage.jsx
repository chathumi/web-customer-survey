import React from 'react'
import './responsepage.scss';
import thankyou from '../../assets/Thankyou.jpg'
import victralogo from '../../assets/Victra.png'

export default function responsepage() {
  return (
    <div className='wrapper-response'>

      <div className="maintxt">
        <img className='image-wrapper' src={thankyou} />
        <div className='response-text'><p>We are sorry to hear your experience  was less than perfect! We'd appreciate the opportunity<br />
          to resolve any concerns you have regarding your store visit and experience. Please allow up to 72 hours for our Guest Relations <br />
          Team to reach out</p></div>
        <div>
          <img className='logo-wrapper' src={victralogo} />
        </div>
      </div>
    </div>
  )
}
