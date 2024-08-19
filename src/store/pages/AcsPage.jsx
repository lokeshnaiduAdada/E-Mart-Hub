
import React from 'react'
import './acpage.css'

import Navbar from '../components/Navbar'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'

const AcsPage = () => {
  return (
    <>
        <div><Navbar></Navbar></div>
        <div className="acspage_section">
            {
                acData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={`/acproduct/${item.id}`} style={{textDecoration:'none'}}>
                                <div className="acspage_details">
                                    <div className='acspage_image'>
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="acpage_company">
                                        <p><strong style={{color:'blueviolet'}}>Comapny Name: </strong>{item.company}</p>
                                    </div>
                                    <div className="acpage_model">
                                        <p><strong style={{color:'blueviolet'}}>Model: </strong>{item.model}</p>
                                    </div>
                                    <div className="acpage_price">
                                        <p><strong style={{color:'blueviolet'}}>Price: </strong>{item.price} /-</p>
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

export default AcsPage