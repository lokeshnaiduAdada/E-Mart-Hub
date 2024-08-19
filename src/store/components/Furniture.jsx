

import React from 'react'
import './furniture.css'
import { furnitureData } from '../data/furniture'

const Furniture = () => {

    const firstFiveImage = furnitureData.slice(0,5);
  return (
    <>
        <h1 className='furniture_title'>Furniture</h1>
        <div className="furniture_section">
            {
                firstFiveImage.map((item,index)=>{
                    return(
                        <div className="furniture_item" key={index}>
                            <img className='furniture_image' src={item.image}></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Furniture