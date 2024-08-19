

import React from 'react'
import { speakerData } from '../data/speaker'
import './speaker.css'

const Speaker = () => {

    const firstFiveImage = speakerData.slice(0,5);

  return (
    <>
        <h1 className='speaker_title'>Speaker</h1>
        <div className="speaker_section" key={"speaker_section"}>
            {
                firstFiveImage.map((item,index)=>{
                    return(
                        <div className="speaker_items" key={index}>
                            <img className='speaker_image' src={item.image}></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Speaker