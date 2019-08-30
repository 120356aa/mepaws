import React from 'react';
import { BannerWrap } from './bannerStyles';

function Banner() {
  return (
    <BannerWrap>
      <div className="bannBox">
        <h1>K9 Paw <span>Decor</span></h1>
        <h1>and More</h1>
      </div>
      
      <div className="contBox">
        <h3>
          K9 Paw Decor specializing in creating treasured
          keepsakes of your pets paw prints, nose prints, or
          black and white trace photos. Your pets print is my
          passion!
        </h3>
      </div>
    </BannerWrap>
  )
}

export default Banner;