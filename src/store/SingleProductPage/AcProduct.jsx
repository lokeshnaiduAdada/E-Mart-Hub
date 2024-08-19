

import React, { useContext } from 'react'
import './singleproduct.css'
import { acData } from '../data/ac';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

const AcProduct = () => {

    const {id} = useParams()

    const {addToCart} = useContext(UserContext)

    const acproduct = acData.find((item)=>item.id==id);

    const addedSuccessfull=()=>{
        alert("Product Added To Cart Successfully");
    }
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src={acproduct.image}></img>
            </div>
            <div className="singleproduct_details">
                <div className='singleproduct_brandname'>
                    <p><strong style={{color:'red'}}>Product Name:</strong> {acproduct.product}</p>
                </div>
                <div className='singleproduct_model'>
                    <p><strong style={{color:'red'}}>Model :</strong> {acproduct.model}</p>
                </div>
                <div className='singleproduct_price'>
                    <p><strong style={{color:'red'}}>Price:</strong> {acproduct.price} /-</p>
                </div>
                <div className='singleproduct_description'>
                    <p><strong style={{color:'red'}}>Description:</strong> {acproduct.description}</p>
                </div>
                <div className="singleproduct_addcart">
                    <button onClick={()=>{addToCart(acproduct),addedSuccessfull()}}>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AcProduct