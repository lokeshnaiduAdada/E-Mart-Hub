
import React from 'react'
import './fridgepage.css'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FridgesPage = () => {
  return (
    <>
        <div><Navbar></Navbar></div>
        <div className="fridgepage_section">
            {
                fridgeData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={`/fridgeproduct/${item.id}`} style={{textDecoration:'none'}}>
                                <div className="fridgepage_details">
                                    <div className="fridgepage_image">
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="fridgepage_brand">
                                        <p><strong style={{color:'blueviolet'}}>Brand Name: </strong>{item.brand}</p>
                                    </div>
                                    <div className="fridgepage_model">
                                        <p><strong style={{color:'blueviolet'}}>Model: </strong>{item.model}</p>
                                    </div>
                                    <div className="fridgepage_price">
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

export default FridgesPage