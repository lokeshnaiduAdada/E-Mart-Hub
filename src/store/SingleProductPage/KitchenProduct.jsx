

import React, { useContext } from 'react'
import './singleproduct.css'
import { kitchenData } from '../data/kitchen';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

const KitchenProduct = () => {

    const {id} = useParams()

    const {addToCart} = useContext(UserContext)

    const kitchenproduct = kitchenData.find((item)=>item.id==id);

    const addedSuccessfull=()=>{
        alert("Product Added To Cart Successfully");
    }
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src={kitchenproduct.image}></img>
            </div>
            <div className="singleproduct_details">
                <div className='singleproduct_brand'>
                    <p><strong style={{color:'red'}}>Brand Name:</strong> {kitchenproduct.brand}</p>
                </div>
                <div className='singleproduct_model'>
                    <p><strong style={{color:'red'}}>Model:</strong> {kitchenproduct.model}</p>
                </div>
                <div className='singleproduct_price'>
                    <p><strong style={{color:'red'}}>Price:</strong> {kitchenproduct.price} /-</p>
                </div>
                <div className='singleproduct_description'>
                    <p><strong style={{color:'red'}}>Description:</strong> {kitchenproduct.description}</p>
                </div>
                <div className="singleproduct_addcart">
                    <button onClick={()=>{addToCart(kitchenproduct),addedSuccessfull()}}>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default KitchenProduct