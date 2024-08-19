

import React from 'react'
import { menData } from '../data/men'
import './men.css'

const Men = () => {

    const firstFiveImage = menData.slice(0,5);

  return (
    <>
        <h1 className='men_title'>Men's wear</h1>
        <div className="men_section">
            {
                firstFiveImage.map((item,index)=>{
                    return(
                        <div className="men_items" key={index}>
                            <img className='men_image' src={item.image}></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Men