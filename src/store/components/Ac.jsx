

import React from 'react'
import { acData } from '../data/ac'
import './ac.css'

const Ac = () => {

    const firstFiveImage = acData.slice(0,5);
  return (
    <>
        <h1 className='ac_title'>Air Condition</h1>
        <div className="ac_section">
            {
                firstFiveImage.map((item,index)=>{
                    return(
                        <div className="ac_item" key={index}>
                            <img className='ac_image' src={item.image}></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Ac