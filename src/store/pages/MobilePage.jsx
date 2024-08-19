
import React from 'react'
import './mobilepage.css'
import Navbar from '../components/Navbar'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'

const MobilePage = () => {
  return (
    <>
        <div><Navbar></Navbar></div>
        <div className="mobilepage_section">
            {
                mobileData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={`/mobileproduct/${item.id}`} style={{textDecoration:'none'}}>
                                <div className="mobilepage_details">
                                    <div className='mobilepage_image'>
                                        <img className='mobilepage_image' src={item.image}></img>
                                    </div>
                                    <div className="mobilepage_company">
                                        <p><strong style={{color:'blueviolet'}}>Company Name: </strong>{item.company}</p>
                                    </div>
                                    <div className="mobilepage_model">
                                        <p><strong style={{color:'blueviolet'}}>Model: </strong>{item.model}</p>
                                    </div>
                                    <div className="mobilepage_price">
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

export default MobilePage