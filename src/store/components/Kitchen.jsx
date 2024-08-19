
import React from 'react'
import { kitchenData } from '../data/kitchen'
import './kitchen.css'

const Kitchen = () => {

    const firstFiveImage = kitchenData.slice(0,5);

  return (
    <>
        <h1 className='kitchen_title'>Kitchen</h1>
        <div className="kitchen_section">
            {
                firstFiveImage.map((item,index)=>{
                    return(
                        <div className="kitchen_item" key={index}>
                            <img className='kitchen_image' src={item.image}></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Kitchen