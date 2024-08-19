import React, { useContext } from 'react'
import './singleproduct.css'
import { womanData } from '../data/woman';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

const WomenWearProduct = () => {
    
    const {id} = useParams()

    const {cartitems,addToCart,removeItem} = useContext(UserContext)

    const womenwerproduct = womanData.find((item)=>item.id==id);

    const addedSuccesfull=()=>{
        alert("Product Added To Cart Succesfully");
    }
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src={womenwerproduct.image} ></img>
            </div>
            <div className="singleproduct_details">
                <div className='singleproduct_brand'>
                    <p><strong style={{color:'red'}}>Brand Name:</strong>  {womenwerproduct.brand}</p>
                </div>
                <div className='singleproduct_model'>
                    <p><strong style={{color:'red'}}>Model:</strong> {womenwerproduct.model}</p>
                </div>
                <div className='singleproduct_price'>
                    <p><strong style={{color:'red'}}>Price:</strong> {womenwerproduct.price} /-</p>
                </div>
                <div className='singleproduct_description'>
                    <p><strong style={{color:'red'}}>Description:</strong> {womenwerproduct.description} </p>
                </div>
                <div className="singleproduct_addcart">
                    <button onClick={()=>{addToCart(womenwerproduct),addedSuccesfull()}}>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default WomenWearProduct