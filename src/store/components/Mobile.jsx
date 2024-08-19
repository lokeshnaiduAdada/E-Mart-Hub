

import React, { useEffect, useState } from 'react';
import { mobileData } from '../data/mobiles';
import './mobile.css'
const Mobile = () => {

  const firstFiveImages = mobileData.slice(0,5);

  return (
    <>
    <h1 className='mobile_title'>Mobiles</h1>
    <div className='mobile_section'>
    {
      firstFiveImages.map((item,index)=>{
        return(
          <div className='image_section' key={index}>
            <img className='mobile_item' src={item.image}></img>
          </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Mobile