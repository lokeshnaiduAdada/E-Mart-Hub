import React, { useContext } from 'react'
import './singleproduct.css'
import { watchData } from '../data/watch';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

const WatchProduct = () => {
    
    const {id} = useParams()

    const {cartItems,addToCart,removeCart} = useContext(UserContext);

    const watchproduct = watchData.find((item)=>item.id==id);

    const addedSuccesfull=()=>{
        alert("Product Added To Cart Succesfully");
    }
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src={watchproduct.image} style={{width:'40%', textAlign:'center'}}></img>
            </div>
            <div className="singleproduct_details">
                <div className='singleproduct_brand'>
                    <p><strong style={{color:'red'}}>Brand Name: </strong> {watchproduct.brand}</p>
                </div>
                <div className='singleproduct_model'>
                    <p><strong style={{color:'red'}}>Model :</strong> {watchproduct.model}</p>
                </div>
                <div className='singleproduct_price'>
                    <p> <strong style={{color:'red'}}>Price:</strong> {watchproduct.price} /-</p>
                </div>
                <div className='singleproduct_desription'>
                    <p> <strong style={{color:'red'}}>Description:</strong> {watchproduct.description}</p>
                </div>
                <div className="singleproduct_addcart">
                    <button onClick={()=>{addToCart(watchproduct),addedSuccesfull()}}>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default WatchProduct