

import React from 'react'
import { computerData } from '../data/computers'
import './computer.css'
const Computer = () => {

    const firstFiveImage=computerData.slice(0,5);
  return (
    <>
        <h1 className='computer_heading'>computer</h1>
        <div className="computer_section">
            {
                firstFiveImage.map((item,index)=>{
                    return(
                        <div className="img_section" key={index}>
                            <img className="computer_img" src={item.image}></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Computer