
import React, { useContext } from 'react'
import './tvpages.css'
import Navbar from '../components/Navbar'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const TvsPage = () => {

    const {addToCart} = useContext(UserContext);

    const addedSuccessfull=()=>{
        alert("Product Added To Cart Successfully");
    }
  return (
    <>
        <div><Navbar></Navbar></div>
        <div className="tvspage_section">
            {
                tvData.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link  style={{textDecoration:'none'}}>
                                <div className="tvspage_details">
                                    <div className='tvspage_image'>
                                        <img  src={item.image}></img>
                                    </div>
                                    <div className="tvspage_company">
                                        <p><strong style={{color:'blueviolet'}}>Company Name: </strong>{item.brand}</p>
                                    </div>
                                    <div className="tvspage_model">
                                        <p><strong style={{color:'blueviolet'}}>Model: </strong>{item.model}</p>
                                    </div>
                                    <div className="tvspage_price">
                                        <p><strong style={{color:'blueviolet'}}>Price: </strong>{item.price} /-</p>
                                    </div>
                                    <div className="singleproduct_addcart" style={{textAlign:'center'}}>
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

export default TvsPage