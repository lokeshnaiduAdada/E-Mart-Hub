

import React from 'react'
import { watchData } from '../data/watch'
import './watch.css'

const Watch = () => {

    const firstFiveImage = watchData.slice(0,5);

  return (
    <>
        <h1 className='watch_title'>Watches</h1>
        <div className="watch_section">
            {
                firstFiveImage.map((item,index)=>{
                    return(
                        <div className="watch_items" key={index}>
                            <img className='watch_image' src={item.image}></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Watch