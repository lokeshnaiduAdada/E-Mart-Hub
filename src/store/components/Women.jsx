

import React from 'react'
import { womanData } from '../data/woman'
import './women.css'

const Women = () => {

    const firstFiveImage = womanData.slice(0,5);

  return (
    <>
        <h1 className='women_title'>Womens's Wear</h1>
        <div className="women_section">
            {
                firstFiveImage.map((item,index)=>{
                    return(
                        <div className="women_items" key={index}>
                            <img className='women_image' src={item.image}></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Women