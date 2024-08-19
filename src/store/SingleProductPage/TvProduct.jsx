

import React from 'react'
import './singleproduct.css'
import { tvData } from '../data/tv';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TvProduct = () => {

    const {id} = useParams()

    const tvproduct = tvData.find((item)=>item.id==id);
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src='1.jpg'></img>
            </div>
            <div className="singleproduct_details">
                <div className='single_brandname'>
                    <h3>Brand Name: {tvproduct.brand}</h3>
                </div>
                <div className='single_model'>
                    <h3>Model : {tvproduct.model}</h3>
                </div>
                <div className='single_price'>
                    <h4>Price: {tvproduct.price}</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default TvProduct