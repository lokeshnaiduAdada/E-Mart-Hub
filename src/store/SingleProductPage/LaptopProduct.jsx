

import React, { useContext } from 'react'
import './singleproduct.css'
import { computerData } from '../data/computers';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

const LaptopProduct = () => {

    const {id} = useParams()

    const {addToCart} = useContext(UserContext);

    const laptopproduct = computerData.find((item)=>item.id==id);

    const addedSuccessfull=()=>{
        alert("Product Added To Cart Successfully");
    }
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src={laptopproduct.image}></img>
            </div>
            <div className="singleproduct_details">
                <div className='singleproduct_brand'>
                    <p><strong style={{color:'red'}}>Product Name:</strong> {laptopproduct.product}</p>
                </div>
                <div className='singleproduct_model'>
                    <p><strong style={{color:'red'}}>Model :</strong> {laptopproduct.model}</p>
                </div>
                <div className='singleproduct_price'>
                    <p><strong style={{color:'red'}}>Price:</strong> {laptopproduct.price} /-</p>
                </div>
                <div className='singleproduct_description'>
                    <p><strong style={{color:'red'}}>Description:</strong> {laptopproduct.description}</p>
                </div>
                <div className="singleproduct_addcart">
                    <button onClick={()=>{addToCart(laptopproduct),addedSuccessfull()}}>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default LaptopProduct