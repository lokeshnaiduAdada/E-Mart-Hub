

import React from 'react'
import './womenpage.css'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const WomenPage = () => {
  return (
    <>
        <div><Navbar/></div>
        <div className="womenpage_section">
            {
                womanData.map((item,index)=>{
                    return(
                        <div style={{paddingBottom:'20px'}} key={index}>
                            <Link to={`/womenwearproduct/${item.id}`} style={{textDecoration:'none'}}>
                                <div className="womenWear_details">
                                    <div className='womenwear_image'>
                                        <img src={item.image}></img>
                                    </div>
                                    <div>
                                        <p><strong style={{color:'blueviolet'}}>Model Name:</strong> {item.model}</p>
                                    </div>
                                    <div className='women_brand'>
                                        <p><strong style={{color:'blueviolet'}}>Brand Name:</strong> {item.brand}</p>
                                    </div>
                                    {/* <div className='women_type'>
                                        <p><strong style={{color:'blueviolet'}}>Material Type:</strong> {item.type}</p>
                                    </div> */}
                                    <div className='womenwear_pirce'>
                                        <p><strong style={{color:'blueviolet'}}>Price:</strong> {item.price}/-</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>

    </>
  )
}

export default WomenPage