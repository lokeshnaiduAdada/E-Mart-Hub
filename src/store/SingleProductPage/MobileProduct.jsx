

import React, { useContext } from 'react'
import './singleproduct.css'
import { mobileData } from '../data/mobiles'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';
const MobileProduct = () => {

    const {id} = useParams()

    const {cartitems,addToCart} = useContext(UserContext)

    const mobileproduct = mobileData.find((item)=>item.id==id);

    const addedSuccessfull=()=>{
        alert("Product Added To Cart Successfully");
    }
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src={mobileproduct.image}></img>
            </div>
            <div className="singleproduct_details">
                <div className="singleproduct_compny">
                    <p><strong style={{color:'red'}}>Company Name:</strong> {mobileproduct.company}</p>
                </div>
                <div className="singleproduct_model">
                    <p> <strong style={{color:'red'}}>Model:</strong> {mobileproduct.model}</p>
                </div>
                <div className="singleproduct_price">
                    <p><strong style={{color:'red'}}>Price:</strong> {mobileproduct.price} /-</p>
                </div>
                <div className="singleproduct_description">
                    <p><strong style={{color:'red'}}>Descriptin: </strong>{mobileproduct.description}</p>
                </div>
                <div className="singleproduct_addcart">
                    <button onClick={()=>{addToCart(mobileproduct),addedSuccessfull()}}>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MobileProduct