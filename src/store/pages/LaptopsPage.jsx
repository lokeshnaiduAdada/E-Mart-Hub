
import React from 'react'
import './laptopspage.css'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const LaptopsPage = () => {
  return (
    <>
        <div><Navbar></Navbar></div>
        <div className="laptopspage_section">
            {
                computerData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={`/laptopproduct/${item.id}`} style={{textDecoration:'none'}}>
                                <div className="laptopspage_details">
                                    <div className='laptopspage_image'>
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="laptoppage_company">
                                        <p><strong style={{color:'blueviolet'}}>Company Name: </strong>{item.company}</p>
                                    </div>
                                    <div className="laptoppage_model">
                                        <p><strong style={{color:'blueviolet'}}>Model: </strong>{item.model}</p>
                                    </div>
                                    <div className="laptoppage_price">
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

export default LaptopsPage