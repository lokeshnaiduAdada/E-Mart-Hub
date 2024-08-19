
import React, { useContext } from 'react'
import './watchespage.css'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const WatchPage = () => {

    const {addToCart} = useContext(UserContext);

    const addedSuccessfull=()=>{
        alert("Product Added To Cart Successfully");
    }
  return (
    <>
    <div><Navbar></Navbar></div>
        <div className='watchpage_section'>
            {
                watchData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={`/watchproduct/${item.id}`} style={{textDecoration:'none'}}>
                                <div className="watchpage_details">
                                    <div className="watchpage_image">
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="watchpage_brand">
                                        <p><strong style={{color:'blueviolet'}}>Brand Name: </strong>{item.brand} </p>
                                    </div>
                                    <div className="watchpage_model">
                                        <p><strong style={{color:'blueviolet'}}>Model: </strong>{item.model}</p>
                                    </div>
                                    <div className="watchpage_price">
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

export default WatchPage