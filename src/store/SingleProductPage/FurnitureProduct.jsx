

import React, { useContext } from 'react'
import './singleproduct.css'
import { furnitureData } from '../data/furniture';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

const FurnitureProduct = () => {

    const {id} = useParams()

    const {addToCart} = useContext(UserContext)

    const furnitureproduct = furnitureData.find((item)=>item.id==id);

    const addedSuccessfull=()=>{
        alert("Product Added To Cart Successfully");
    }
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src={furnitureproduct.image}></img>
            </div>
            <div className="singleproduct_details">
                <div className='singleproduct_brand'>
                    <p><strong style={{color:'red'}}>Brand Name:</strong> {furnitureproduct.brand}</p>
                </div>
                <div className='singleproduct_model'>
                    <p><strong style={{color:'red'}}>Model :</strong> {furnitureproduct.model}</p>
                </div>
                <div className='singleproduct_price'>
                    <p><strong style={{color:'red'}}>Price:</strong> {furnitureproduct.price}</p>
                </div>
                <div className='singleproduct_description'>
                    <p><strong style={{color:'red'}}>Description:</strong> {furnitureproduct.description}</p>
                </div>
                <div className="singleproduct_addcart">
                    <button onClick={()=>{addToCart(furnitureproduct),addedSuccessfull()}}>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default FurnitureProduct