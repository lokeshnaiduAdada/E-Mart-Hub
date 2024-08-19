
import React from 'react'
import './menwearpage.css'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MenwearsPage = () => {
  return (
    <>
        <div><Navbar></Navbar></div>
        <div className="menwearpage_section">
            {
                menData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={`/menwearproduct/${item.id}`} style={{textDecoration:'none'}}>
                                <div className="menwearpage_details">
                                    <div className='menwearpage_image'>
                                        <img src={item.image}></img>
                                    </div>
                                    <div className='menwear_brand'>
                                        <p><strong style={{color:'blueviolet'}}>Brand Name: </strong>{item.brand} </p>
                                    </div>
                                    <div className='menwearpage_model'>
                                        <p><strong style={{color:'blueviolet'}}>Model: </strong>{item.model}</p>
                                    </div>
                                    <div className="menwear_price">
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

export default MenwearsPage