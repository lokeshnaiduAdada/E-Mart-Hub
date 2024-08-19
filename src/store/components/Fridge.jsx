

import React from 'react'
import { fridgeData } from '../data/fridge'
import './fridge.css'

const Fridge = () => {

    const firstFiveImage = fridgeData.slice(0,5);
  return (
    <>
        <h1 className='fridge_title'>Fridge</h1>
        <div className="fridge_section">
            {
                firstFiveImage.map((item,index)=>{
                    return(
                        <div className="fridge_item" key={index}>
                            <img className='fridge_image' src={item.image}></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Fridge