

import React from 'react'
import './singleproduct.css'
import { menData } from '../data/men';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const MenWearProduct = () => {

    const {id} = useParams()
    const {cartitems,addToCart} = useContext(UserContext)

    const menproduct = menData.find((item)=>item.id==id);

    const addedSuccesfull=()=>{
        alert("Product addedTo Cart Succesfully");
    }
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src={menproduct.image}></img>
            </div>
            <div className="singleproduct_details">
                <div className='singleproduct_brand'>
                    <p><strong style={{color:'red'}}>Brand Name:</strong> {menproduct.brand}</p>
                </div>
                <div className='singleproduct_model'>
                    <p><strong style={{color:'red'}}>Model:</strong> {menproduct.model}</p>
                </div>
                <div className='singleproduct_price'>
                    <p><strong style={{color:'red'}}>Price:</strong> {menproduct.price} /-</p>
                </div>
                <div className='singleproduct_description'>
                    <p><strong style={{color:'red'}}>Description:</strong> {menproduct.description}</p>
                </div>
                <div className="singleproduct_addcart">
                    <button onClick={()=>{addToCart(menproduct),addedSuccesfull()}}>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MenWearProduct