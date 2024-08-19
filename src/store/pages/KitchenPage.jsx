
import React from 'react'
import './kitchenpage.css'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const KitchenPage = () => {
  return (
    <>
        <div><Navbar></Navbar></div>
        <div className="kitchenpage_section">
            {
                kitchenData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={`/kitchenproduct/${item.id}`} style={{textDecoration:'none'}}>
                                <div className="kitchenpage_details">
                                    <div className="kitchenpage_image">
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="kitchenpage_model">
                                        <p><strong style={{color:'blueviolet'}}>Model Name: </strong>{item.model}</p>
                                    </div>
                                    <div className="kitchenpage_type">
                                        <p><strong style={{color:'blueviolet'}}>Type: </strong>{item.type}</p>
                                    </div>
                                    <div className="kitchenpage_price">
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

export default KitchenPage