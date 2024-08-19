

import React from 'react'
import { tvData } from '../data/tv'
import './tv.css'

const Tv = () => {

    const firstFiveImage = tvData.slice(0,5);
  return (
    <>
        <h1 className='tv_title'>TV</h1>
        <div className="tv_section">
            {
               firstFiveImage.map((item,index)=>{
                return(
                    <div className="tv_item" key={index}>
                        <img className='tv_image' src={item.image}></img>
                    </div>
                )
               }) 
            }
        </div>
    </>
  )
}

export default Tv