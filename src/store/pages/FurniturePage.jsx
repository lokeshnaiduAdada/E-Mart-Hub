
import React from 'react'
import './furniturepage.css'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FurniturePage = () => {
  return (
    <>
        <div><Navbar></Navbar></div>
        <div className="furniturepage_section">
            {
                furnitureData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={`/furnitureproduct/${item.id}`} style={{textDecoration:'none'}}>
                                <div className="furniturepage_details">
                                    <div className='furniturepage_image' >
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="furniturepage_brand">
                                        <p><strong style={{color:'blueviolet'}}>Brand Name: </strong>{item.brand}</p>
                                    </div>
                                    <div className="furniturepage_model">
                                        <p><strong style={{color:'blueviolet'}}>Model: </strong>{item.model}</p>
                                    </div>
                                    <div className="furniturepage_price">
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

export default FurniturePage