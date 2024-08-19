
import React, { useContext } from 'react'
import './speakerpage.css'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const SpeakerPage = () => {

    const {addToCart} = useContext(UserContext);

    const addedSuccessfull=()=>{
        alert("Product Added To Cart Successfully");
    }
  return (
    <>
        <div><Navbar></Navbar></div>
        <div className="speakerpage_section">
            {
                speakerData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link  style={{textDecoration:'none'}}>
                                <div className="speakerpage_details">
                                    <div className='speakerpage_image'>
                                        <img  src={item.image}></img>
                                    </div>
                                    <div className="speakerpage_company">
                                        <p><strong style={{color:'blueviolet'}}>Company Name: </strong>{item.brand}</p>
                                    </div>
                                    <div className="speakerpage_model">
                                        <p><strong style={{color:'blueviolet'}}>Model: </strong>{item.model}</p>
                                    </div>
                                    <div className="speakerpage_price">
                                        <p><strong style={{color:'blueviolet'}}>Price: </strong>{item.price} /-</p>
                                    </div>
                                    <div className="singleproduct_addcart">
                                        <button onClick={()=>{addToCart(item),addedSuccessfull()}}>Add to cart</button>
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

export default SpeakerPage